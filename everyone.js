'use strict'

/*
  min-profile-web/2025.0.0
  Copyright (C) by Luis Silva & Adelino Camara. All Rights Reserved.
  Unauthorized use, copy, modify, fork, merge, publish, distribute, sublicense, sell, is strictly prohibited.
  Proprietary and confidential.
*/

import * as globalConfig from './global-config.js'
import * as localConfig from './local-config.js'
import LOCAL_STRINGS from './local-strings.js'
import * as SLJavascript from './lib/sl-javascript/2025.0.0/sl-javascript.js'
import * as SLNodeJs from './lib/sl-nodejs/2025.0.0/sl-nodejs.js'
import fsExtra from 'fs-extra'
import multer from 'multer'
import express from 'express'
import QRCode from 'qrcode'

const router = express.Router({
  mergeParams: true
})

router.use(express.json())
router.use(express.urlencoded({
  extended: true
}))

const upload = multer({
  dest: 'uploads/'
})

router.get('/', (req, res) => {
  res.redirect('/profile/login')
})

router.get('/login', (req, res) => {
  try {
    if (req.session.user_token) {
      res.redirect('/profile/admin')
      return
    }
    res.render('login', {
      req,
      LOCAL_STRINGS
    })
  } catch (err) {
    console.error(err)
    res.redirect('/profile/404')
  }
})

router.post('/login', upload.none(), async (req, res) => {
  try {
    console.log('everyone.js ------- entro al POST login ');
    let oIdCountry = 1
    let sTypeKey =  req.body.hid_type_key
    const callUserToken = await SLNodeJs.SLRestCall('GET', globalConfig.URLS.min_profile_backend + '/user-token', req,
      {
        key: req.body.txtKey,
        pwd: req.body.txtPassword
      }
    )
    console.log('regreso del user-token');
    let oReturn = callUserToken
    if (callUserToken.message.code === 'user_logged') {
      req.session.user_token = callUserToken.payload.user_token
      console.log('user_token:', req.session.user_token);
      const callActiveUser = await SLNodeJs.SLRestCall('GET', globalConfig.URLS.min_profile_backend + '/active-user', req,
        {
          id_ministry: -1,
          id_user: callUserToken.payload.id_user,
          language: req.session.language,
          date_format: req.session.date_format,
          date_separator: req.session.date_separator,
          utc_offset: '123456789'
        }
      )
      if (callActiveUser.message.code === 'completed_operation') {
        console.log('entro al completed_operation');
        req.session.active_user = callActiveUser.payload;
        req.session.login_user = callActiveUser.payload;
        if (req.session.active_user.id_country_residence !== '') {
          oIdCountry = req.session.active_user.id_country_residence;
        } else {
          oIdCountry = 1
        }
        const callStates = await SLNodeJs.SLRestCall('GET', globalConfig.URLS.min_profile_backend + '/states-by-id-country', req,
          {
            id_country: oIdCountry
          }
        )
        req.session.states = callStates.payload
      } else {
        console.log('entro al else no es ====! completed_operation');
        req.session.user_token = null
        req.session.active_user = null
        req.session.active_user_qrcode = null
        req.session.login_user = null
        req.session.active_ministry = null
        oReturn = callActiveUser
      }
    }
    console.log('va a la login.ejs');
    console.log('valor de oReturn', oReturn);
    res.status(oReturn.message.http_status)
    res.json(oReturn)
  } catch (err) {
    console.error(err)
    const oReturn = {
    }
    oReturn.message = localConfig.SYSTEM_MESSAGES.operation_not_completed
    res.status(oReturn.message.http_status)
    res.json(oReturn)
  }
})

router.get('/validation-email-code', (req, res) => {
  try {
    if (req.session.user_token) {
      res.redirect('/profile/admin')
      return
    }
    res.render('validation-email-code', {
      req,
      LOCAL_STRINGS
    })
  } catch (err) {
    console.error(err)
    res.redirect('/profile/404')
  }
})

router.get('/forgot-password', (req, res) => {
  try {
    if (req.session.user_token) {
      res.redirect('/profile/admin')
      return
    }
    res.render('forgot-password', {
      req,
      LOCAL_STRINGS
    })
  } catch (err) {
    console.error(err)
    res.redirect('/profile/404')
  }
})

router.get('/show-message', (req, res) => {
  try {
    if (req.session.temporal_render?.render === 'show-message') {
      res.render('show-message', {
        ...req.session.temporal_render,
        req,
        LOCAL_STRINGS
      })
    } else {
      res.redirect('/profile/404')
    }
  } catch (err) {
    console.error(err)
    res.redirect('/profile/404')
  }
})

router.post('/family-x-gender', async (req, res) => {
  console.log("everyone.js --- get(/family-x-gender")
  try {
    const callFamily = await SLNodeJs.SLRestCall('GET', globalConfig.URLS.min_profile_backend + '/types-family-relationships', req)
    if (callFamily.message.error) {
      if (callFamily.message.code === 'operation_not_completed') {
        res.status(callFamily.message.http_status)
        res.json(callFamily)
        return
      }
    }
    res.status(callFamily.message.http_status)
    res.json(callFamily.payload.typefamilyrelationships)
  } catch (err) {
    console.error(err)
    const oReturn = {}
    oReturn.message = localConfig.SYSTEM_MESSAGES.operation_not_completed
    res.status(oReturn.message.http_status)
    res.json(oReturn)
  }
})

router.post('/states-x-country', async (req, res) => {
  console.log("everyone.js --- get(/states-x-country")
  try {
    const parIdCountry = req.body.id_country
    console.log("parIdCountry" + parIdCountry )
    const callStates = await SLNodeJs.SLRestCall('GET', globalConfig.URLS.min_profile_backend + '/states-by-id-country', req,
      {
        id_country: parIdCountry
      }
    )
    if (callStates.message.error) {
      if (callStates.message.code === 'operation_not_completed') {
        res.status(callStates.message.http_status)
        res.json(callStates)
        return
      }
    }
    res.status(callStates.message.http_status)
    res.json(callStates.payload.states)
  } catch (err) {
    console.error(err)
    const oReturn = {}
    oReturn.message = localConfig.SYSTEM_MESSAGES.operation_not_completed
    res.status(oReturn.message.http_status)
    res.json(oReturn)
  }
})

router.post('/statusdiseases-x-all', async (req, res) => {
  console.log("everyone.js --- get(/statusdiseases-x-all")
  try {
    const parLanguage = req.body.language
    const callStatusDiseases = await SLNodeJs.SLRestCall('GET', globalConfig.URLS.min_profile_backend + '/status-diseases', req,
      {
        language: parLanguage
      }
    )
    if (callStatusDiseases.message.error) {
      if (callStatusDiseases.message.code === 'operation_not_completed') {
        res.status(callStatusDiseases.message.http_status)
        res.json(callStatusDiseases)
        return
      }
    }
    res.status(callStatusDiseases.message.http_status)
    res.json(callStatusDiseases.payload.statusdiseases)
  } catch (err) {
    console.error(err)
    const oReturn = {}
    oReturn.message = localConfig.SYSTEM_MESSAGES.operation_not_completed
    res.status(oReturn.message.http_status)
    res.json(oReturn)
  }
})

router.post('/typediseases-x-all', async (req, res) => {
  console.log("everyone.js --- get(/typediseases-x-all")
  try {
    const parLanguage = req.body.language
    const callTypesDiseases = await SLNodeJs.SLRestCall('GET', globalConfig.URLS.min_profile_backend + '/type-diseases', req,
      {
        language: parLanguage
      }
    )
    if (callTypesDiseases.message.error) {
      if (callTypesDiseases.message.code === 'operation_not_completed') {
        res.status(callTypesDiseases.message.http_status)
        res.json(callTypesDiseases)
        return
      }
    }
    res.status(callTypesDiseases.message.http_status)
    res.json(callTypesDiseases.payload.typesdiseases)
  } catch (err) {
    console.error(err)
    const oReturn = {}
    oReturn.message = localConfig.SYSTEM_MESSAGES.operation_not_completed
    res.status(oReturn.message.http_status)
    res.json(oReturn)
  }
})

router.post('/subdiseases-x-typedisease', async (req, res) => {
  console.log("everyone.js --- get(/subdiseases-x-typedisease")
  try {
    const parIdTypeDisease = req.body.id_type_disease
    const parLanguage = req.body.language
    console.log("parIdTypeDisease:  " + parIdTypeDisease )
    const callSubsDiseases = await SLNodeJs.SLRestCall('GET', globalConfig.URLS.min_profile_backend + '/sub-diseases-by-id-type-disease', req,
      {
        id_type_disease: parIdTypeDisease,
        language: parLanguage
      }
    )
    if (callSubsDiseases.message.error) {
      if (callSubsDiseases.message.code === 'operation_not_completed') {
        res.status(callSubsDiseases.message.http_status)
        res.json(callSubsDiseases)
        return
      }
    }
    res.status(callSubsDiseases.message.http_status)
    res.json(callSubsDiseases.payload.subsdiseases)
  } catch (err) {
    console.error(err)
    const oReturn = {}
    oReturn.message = localConfig.SYSTEM_MESSAGES.operation_not_completed
    res.status(oReturn.message.http_status)
    res.json(oReturn)
  }
})

router.post('/diseases-x-subdisease', async (req, res) => {
  console.log("everyone.js --- get(/diseases-x-subdisease")
  try {
    const parIdSubDisease = req.body.id_sub_disease
    const parLanguage = req.body.language
    console.log("parIdSubDisease:  " + parIdSubDisease )
    const callDiseases = await SLNodeJs.SLRestCall('GET', globalConfig.URLS.min_profile_backend + '/diseases-by-id-sub-disease', req,
      {
        id_sub_disease: parIdSubDisease,
        language: parLanguage
      }
    )
    if (callDiseases.message.error) {
      if (callDiseases.message.code === 'operation_not_completed') {
        res.status(callDiseases.message.http_status)
        res.json(callDiseases)
        return
      }
    }
    res.status(callDiseases.message.http_status)
    res.json(callDiseases.payload.diseases)
  } catch (err) {
    console.error(err)
    const oReturn = {}
    oReturn.message = localConfig.SYSTEM_MESSAGES.operation_not_completed
    res.status(oReturn.message.http_status)
    res.json(oReturn)
  }
})

router.post('/skills-x-type-skill', async (req, res) => {
  console.log("everyone.js --- post(/skills-x-type-skill")
  try {
    const parTypeSkill = req.body.type_skill
    const parLanguage = req.body.language
    console.log("parTypeSkill" + parTypeSkill )
    console.log("parLanguage" + parLanguage )
    const callSkills = await SLNodeJs.SLRestCall('GET', globalConfig.URLS.min_profile_backend + '/skills-by-type-skill', req,
      {
        type_skill: parTypeSkill,
        language: parLanguage
      }
    )
    if (callSkills.message.error) {
      if (callSkills.message.code === 'operation_not_completed') {
        res.status(callSkills.message.http_status)
        res.json(callSkills)
        return
      }
    }
    res.status(callSkills.message.http_status)
    res.json(callSkills.payload.skills)
  } catch (err) {
    console.error(err)
    const oReturn = {}
    oReturn.message = localConfig.SYSTEM_MESSAGES.operation_not_completed
    res.status(oReturn.message.http_status)
    res.json(oReturn)
  }
})

router.get('/process-email-validation', async (req, res) => {
  console.log('GET process-email-validation')
  req.session.user_token = null
  req.session.active_user = null
  req.session.active_ministry = null
  const sEmail = req.query.email
  try {
    const callUserResendEmailCode = await SLNodeJs.SLRestCall('PUT', globalConfig.URLS.min_profile_backend + '/user-validation-resend-email-code', req,
      {
        email: sEmail
      }
    )
    console.log('callUserRegistration:', callUserResendEmailCode)
    console.log('message.code', callUserResendEmailCode.message.code)
    console.log('message.error', callUserResendEmailCode.message.error)
    if (callUserResendEmailCode.message.error) {
      if (callUserResendEmailCode.message.code === 'operation_not_completed') {
        res.status(callUserResendEmailCode.message.http_status)
        res.json(callUserResendEmailCode)
      }
      res.status(callUserResendEmailCode.message.http_status)
      res.json(callUserResendEmailCode)
    }
    // OJO **********************
    // res.status(callUserResendEmailCode.message.http_status)
    // res.json(callUserResendEmailCode)
    if (callUserResendEmailCode.message.code === 'resend_email_validation_code_ok') {
      console.log('resend code validation email :', callUserResendEmailCode.payload.id_user)
      let callSendEmail = {}
      callSendEmail.message = localConfig.SYSTEM_MESSAGES.operation_not_completed
      callSendEmail = await SLNodeJs.SLRestCall('POST', globalConfig.URLS.min_email_backend + '/send-email', req, {
        id_user_sent: -1,
        sent_title: req.session.system_email_title,
        sent_email: req.session.system_email,
        id_user_received: callUserResendEmailCode.payload.id_user,
        received_email: sEmail,
        id_message_template: 4,
        code_process: 'user.resend-validation-email-code',
        id_ministry: -1,
        language: req.session.language,
        sent_status: 'sent',
        id_create: -1,
        id_login: -1,
        first_name: callUserResendEmailCode.payload.first_name,
        last_name: callUserResendEmailCode.payload.last_name,
        email: sEmail,
        user_name: callUserResendEmailCode.payload.user_name,
        code_validation_email: callUserResendEmailCode.payload.code_validation_email
      })
    }
    res.render('process-email-validation', {
      req,
      LOCAL_STRINGS,
      email: sEmail
    })
  } catch (err) {
    console.error(err)
    res.redirect('/profile/404')
  }
})

router.post('/process-email-validation', (req, res) => {
  console.log('PASO POR AQUI ------- process-email-validation')
  try {
    if (req.session.user_token) {
      res.redirect('/profile/admin')
      return
    }
    res.render('process-email-validation', {
      req,
      LOCAL_STRINGS
    })
  } catch (err) {
    console.error(err)
    res.redirect('/profile/404')
  }
})

router.get('/forgot-password', (req, res) => {
  try {
    if (req.session.user_token) {
      res.redirect('/profile/admin')
      return
    }
    res.render('forgot-password', {
      req,
      LOCAL_STRINGS
    })
  } catch (err) {
    console.error(err)
    res.redirect('/profile/404')
  }
})

router.post('/forgot-password-step1', async (req, res) => {
  var par_recover_account = req.session.recover_account;
  req.session.user_token = null;
  req.session.active_user = null;
  req.session.base_page_number = 1;
  console.log("se paso por ----- forgot_password");
  console.log(" req.session.recover_account.id_user" + req.session.recover_account.id_user );
  try {
    const parIdUser = req.session.recover_account.id_user
    const callUser = await SLNodeJs.SLRestCall('GET', globalConfig.URLS.min_profile_backend + '/user-by-id-user', req,
    {
      id_ministry: -1,
      language: req.session.language,
      id_user: parIdUser,
      date_format: req.session.date_format,
      date_separator: req.session.date_separator,
      utc_offset: req.session.utc_offset
    }
  )
    if (callUser.message.error) {
      if (callUser.message.code === 'operation_not_completed') {
        res.status(callUser.message.http_status)
        res.json(callUser)
        return
      }
    }
    console.log("user a recuperara:" , callUser.payload.user);
    console.log("ID_USER:" , callUser.payload.user[0].id_user);
    req.session.user_recover = callUser.payload.user[0];
    console.log("user a recuperar:" , req.session.user_recover.id_user);
    console.log("first_name user a recuperar:" , req.session.user_recover.first_name);
    console.log("img_flag_nation user a recuperar:" , req.session.user_recover.img_flag_nat);
    console.log("nationality a recuperar:" , req.session.user_recover.nationality);
    console.log("par_recover_account.error:" , par_recover_account.error);
    console.log("par_recover_account.code:" , par_recover_account.code);
    console.log("par_recover_account.security_questions:" , par_recover_account.security_questions);
    if (par_recover_account.error ===  false) {
      res.render('forgot-password-step2', {
          recover: par_recover_account,
          user: req.session.user_recover,
          menu_profile: 'www',
          req,
          page_title: LOCAL_STRINGS.reset_password,
          LOCAL_STRINGS
      });
      return;
    } else {
        switch (par_recover_account.code) {
            case 'account_not_validated':
                if (par_recover_account.email) {
                    res.render('send_validation_email', {
                        user: req.session.user_recover,
                        menu_profile: 'www',
                        req,
                        page_title: strings.validation_account,
                        strings
                    });
                }
                else if (par_recover_account.cell_phone) {
                    res.render('send_validation_cell_phone', {
                        user: req.session.user_recover,
                        menu_profile: 'www',
                        req,
                        page_title: strings.validation_account,
                        strings
                    });
                }
            break;
            case 'email_not_validated':
                res.render('send_validation_email', {
                    user: req.session.user_recover,
                    menu_profile: 'www',
                    req,
                    page_title: strings.validation_account,
                    strings
                });
            break;
            case 'cell_phone_not_validated':
                res.render('send_validation_cell_phone', {
                    user: req.session.user_recover,
                    menu_profile: 'www',
                    req,
                    page_title: strings.validation_account,
                    strings
                });
            break;
        }
    }
  } catch (err) {
    console.error(err)
    const oReturn = {}
    oReturn.message = localConfig.SYSTEM_MESSAGES.operation_not_completed
    res.status(oReturn.message.http_status)
    res.json(oReturn)
  }
})

router.post('/forgot-password-step2', upload.none(), async (req, res) => {
  console.log("POST - forgot-password-step2");
  try {
    const parOption = req.body.grpRecover
    console.log("parOption:" + parOption );
    console.log("id_user:" + req.session.user_recover.id_user );
    let parCodeForgotPassword
    let callUserQuestionsSecurity
    let callGenerateCodeForgotPassword
    req.session.user_token = null
    req.session.active_user = null
    req.session.active_ministry = null
    switch (parOption) {
      case 'email':
        callGenerateCodeForgotPassword = await SLNodeJs.SLRestCall('PUT', globalConfig.URLS.min_profile_backend + '/generate-code-forgot-password', req,
          {
            id_user: req.session.user_recover.id_user
          }
        )
        if (callGenerateCodeForgotPassword.message.error) {
          if (callGenerateCodeForgotPassword.message.code === 'operation_not_completed') {
            console.error(JSON.stringify(callGenerateCodeForgotPassword))
            res.redirect('/profile/404')
            return
          }
        }
        console.log("payload:" + callGenerateCodeForgotPassword.payload );
        console.log("code_validation_pwd:" + callGenerateCodeForgotPassword.payload.code_validation_pwd );
        parCodeForgotPassword = callGenerateCodeForgotPassword.payload.code_validation_pwd
        const callSendEmail = await SLNodeJs.SLRestCall('POST', globalConfig.URLS.min_email_backend + '/send-email', req, {
          id_user_sent: -1,
          sent_title: req.session.system_email_title,
          sent_email: req.session.system_email,
          id_user_received: req.session.user_recover.id_user,
          received_email: req.session.user_recover.email,
          id_message_template: 5,
          code_process: 'user.code-forgot-password',
          id_ministry: -1,
          language: req.session.language,
          sent_status: 'sent',
          id_create: -1,
          id_login: -1,
          first_name: req.session.user_recover.first_name,
          last_name: req.session.user_recover.last_name,
          code_validation_pwd: parCodeForgotPassword,
          email: req.session.user_recover.email,
          user_name:  req.session.user_recover.user_name
        })
        if (callSendEmail.message.error) {
          if (callSendEmail.message.code === 'operation_not_completed') {
            console.error(JSON.stringify(callSendEmail))
            res.redirect('/profile/404')
            return
          }
        }
        res.render('forgot-password-step3-code-email', {
          user: req.session.user_recover,
          menu_profile: 'www',
          req,
          LOCAL_STRINGS
        })
        break;
      case 'sms':
        callGenerateCodeForgotPassword = await SLNodeJs.SLRestCall('PUT', globalConfig.URLS.min_profile_backend + '/generate-code-forgot-password', req,
          {
            id_user: req.session.user_recover.id_user
          }
        )
        if (callGenerateCodeForgotPassword.message.error) {
          if (callGenerateCodeForgotPassword.message.code === 'operation_not_completed') {
            console.error(JSON.stringify(callGenerateCodeForgotPassword))
            res.redirect('/profile/404')
            return
          }
        }
        console.log("payload:" + callGenerateCodeForgotPassword.payload );
        console.log("code_validation_pwd:" + callGenerateCodeForgotPassword.payload.code_validation_pwd );
        parCodeForgotPassword = callGenerateCodeForgotPassword.payload.code_validation_pwd
        // const callSendSms = await SLNodeJs.SLRestCall('POST', globalConfig.URLS.min_sms_backend + '/send-sms', req, {
        //   id_user_sent: -1,
        //   sent_title: req.session.system_sms_title,
        //   sent_sms: req.session.system_sms,
        //   id_user_received: req.session.user_recover.id_user,
        //   received_sms: req.session.user_recover.cell_phone,
        //   id_message_template: 5,
        //   code_process: 'user.code-forgot-password',
        //   id_ministry: -1,
        //   language: req.session.language,
        //   sent_status: 'sent',
        //   id_create: -1,
        //   first_name: req.session.user_recover.first_name,
        //   last_name: req.session.user_recover.last_name,
        //   code_validation_pwd: parCodeForgotPassword,
        //   email: req.session.user_recover.email,
        //   user_name:  req.session.user_recover.user_name
        // })
        // if (callSendSms.message.error) {
        //   if (callSendSms.message.code === 'operation_not_completed') {
        //     console.error(JSON.stringify(callSendSms))
        //     res.redirect('/profile/404')
        //     return
        //   }
        // }
        res.render('forgot-password-step3-code-sms', {
          user: req.session.user_recover,
          menu_profile: 'www',
          req,
          LOCAL_STRINGS
        })
        break;
      case 'questions':
        callUserQuestionsSecurity = await SLNodeJs.SLRestCall('GET', globalConfig.URLS.min_profile_backend + '/user-questions-security', req,
          {
            id_user: req.session.user_recover.id_user,
            language: req.session.language
          }
        )
        if (callUserQuestionsSecurity.message.error) {
          if (callUserQuestionsSecurity.message.code === 'questions_unregistered') {
            console.error(JSON.stringify(callUserQuestionsSecurity))
            res.redirect('/profile/404')
            return
          }
        }
        res.render('questions_security', {
          question1: callUserQuestionsSecurity.payload.security_question_1,
          question2: callUserQuestionsSecurity.payload.security_question_2,
          question3: callUserQuestionsSecurity.payload.security_question_3,
          user: req.session.user_recover,
          menu_profile: 'www',
          req,
          page_title: LOCAL_STRINGS.security_questions,
          LOCAL_STRINGS
        })
        break;
    }
  } catch (err) {
    console.error(err)
    res.redirect('/profile/404')
  }
})

router.post('/code-password-resend', upload.none(), async (req, res) => {
  try {
    console.log("POST - codepasswordresend");
    console.log("id_user:" + req.session.user_recover.id_user );
    let parCodeForgotPassword
    let callSendEmail
    let callSendSms
    const parEmailSms = req.body.hid_email_sms
    console.log("parEmailSms:" + parEmailSms );
    req.session.user_token = null
    req.session.active_user = null
    req.session.active_ministry = null
    let callGenerateCodeForgotPassword
    callGenerateCodeForgotPassword = await SLNodeJs.SLRestCall('PUT', globalConfig.URLS.min_profile_backend + '/generate-code-forgot-password', req,
      {
        id_user: req.session.user_recover.id_user
      }
    )
    if (callGenerateCodeForgotPassword.message.error) {
      if (callGenerateCodeForgotPassword.message.code === 'operation_not_completed') {
        console.error(JSON.stringify(callGenerateCodeForgotPassword))
        res.redirect('/profile/404')
        return
      }
    }
    console.log("payload:" + callGenerateCodeForgotPassword.payload );
    console.log("code_validation_pwd:" + callGenerateCodeForgotPassword.payload.code_validation_pwd );
    parCodeForgotPassword = callGenerateCodeForgotPassword.payload.code_validation_pwd
    switch (parEmailSms) {
      case 'email':
        callSendEmail = await SLNodeJs.SLRestCall('POST', globalConfig.URLS.min_email_backend + '/send-email', req, {
          id_user_sent: -1,
          sent_title: req.session.system_email_title,
          sent_email: req.session.system_email,
          id_user_received: req.session.user_recover.id_user,
          received_email: req.session.user_recover.email,
          id_message_template: 5,
          code_process: 'user.code-forgot-password',
          id_ministry: -1,
          language: req.session.language,
          sent_status: 'sent',
          id_create: -1,
          id_login: -1,
          first_name: req.session.user_recover.first_name,
          last_name: req.session.user_recover.last_name,
          code_validation_pwd: parCodeForgotPassword,
          email: req.session.user_recover.email,
          user_name:  req.session.user_recover.user_name
        })
        if (callSendEmail.message.error) {
          if (callSendEmail.message.code === 'operation_not_completed') {
            console.error(JSON.stringify(callSendEmail))
            res.redirect('/profile/404')
            return
          }
        }
        if (callSendEmail.message.code === 'completed_operation') {
          res.status(callSendEmail.message.http_status)
          res.json(callGenerateCodeForgotPassword)
        }
        break;
      case 'sms':
        callSendSms = await SLNodeJs.SLRestCall('POST', globalConfig.URLS.min_sms_backend + '/send-sms', req, {
          id_user_sent: -1,
          sent_title: req.session.system_sms_title,
          sent_sms: req.session.system_sms,
          id_user_received: req.session.user_recover.id_user,
          received_sms: req.session.user_recover.cell_phone,
          id_message_template: 5,
          code_process: 'user.code-forgot-password',
          id_ministry: -1,
          language: req.session.language,
          sent_status: 'sent',
          id_create: -1,
          first_name: req.session.user_recover.first_name,
          last_name: req.session.user_recover.last_name,
          code_validation_pwd: parCodeForgotPassword,
          email: req.session.user_recover.email,
          user_name:  req.session.user_recover.user_name
        })
        if (callSendSms.message.error) {
          if (callSendSms.message.code === 'operation_not_completed') {
            console.error(JSON.stringify(callSendSms))
            res.redirect('/profile/404')
            return
          }
        }
        if (callSendSms.message.code === 'completed_operation') {
          res.status(callSendSms.message.http_status)
          res.json(callGenerateCodeForgotPassword)
        }
        break;
    }
  } catch (err) {
    console.error(err)
    res.redirect('/profile/404')
  }
})

router.put('/process-verification-code', upload.none(),  async (req, res) => {
  console.log('viene del email: ------>everyone: router.put(/process-verification-code')
  try {
    const parCode = req.body.txtCode
    console.log("id_user:" + req.session.user_recover.id_user );
    console.log('parCodeValidationEmail:' + parCode)
    req.session.user_token = null
    req.session.active_user = null
    req.session.active_ministry = null
    const callVerificationEmailCode = await SLNodeJs.SLRestCall('PUT', globalConfig.URLS.min_profile_backend + '/process-verification-code', req,
      {
        id_user: req.session.user_recover.id_user,
        code: parCode
      }
    )
    /*
      SELECT json_object('affected', true, 'id_user', _id_user, 'code', 'email_validation_ok', 'result_message', true);
    */
    console.log('antes del error:')
    console.log('error:', callVerificationEmailCode.message.error)
    if (callVerificationEmailCode.message.error) {
      if (callVerificationEmailCode.message.code === 'operation_not_completed') {
        console.error(JSON.stringify(callVerificationEmailCode))
        return
      }
    }
    console.log('code:', callVerificationEmailCode.payload.code)
    console.log("antes del switch")
    let oReturn = callVerificationEmailCode
    switch (callVerificationEmailCode.payload.code) {
      case "password_reset_authorized":
        res.status(oReturn.message.http_status)
        res.json(oReturn)
        break;
      case "wrong_reset_code":
        res.status(oReturn.message.http_status)
        res.json(oReturn)
        break;
      case 'change_operation_not_requested':
        req.session.user_recover = null
        req.session.active_user = null
        break;
      case 'retries_exceeded':
        res.status(oReturn.message.http_status)
        res.json(oReturn)
        req.session.user_recover = null
        req.session.active_user = null
        break;
      case 'invalid_user':
        req.session.user_recover = null
        req.session.active_user = null
        break;
     default:
      break;
    }
  } catch (err) {
    console.error(err)
    const oReturn = {
    }
    oReturn.message = localConfig.SYSTEM_MESSAGES.operation_not_completed
    res.status(oReturn.message.http_status)
    res.json(oReturn)
  }
})

router.put('/process-verification-sms-code', upload.none(),  async (req, res) => {
  console.log('viene del sms: ------>everyone: router.put(/process-verification-sms-code')
  try {
    const parCode = req.body.txtCode
    console.log("id_user:" + req.session.user_recover.id_user );
    console.log('parCode:' + parCode)
    req.session.user_token = null
    req.session.active_user = null
    req.session.active_ministry = null
    const callVerificationSmsCode = await SLNodeJs.SLRestCall('PUT', globalConfig.URLS.min_profile_backend + '/process-verification-code', req,
      {
        id_user: req.session.user_recover.id_user,
        code: parCode
      }
    )
    /*
      SELECT json_object('affected', true, 'id_user', _id_user, 'code', 'email_validation_ok', 'result_message', true);
    */
    console.log('antes del error:')
    console.log('error:', callVerificationSmsCode.message.error)
    if (callVerificationSmsCode.message.error) {
      if (callVerificationSmsCode.message.code === 'operation_not_completed') {
        console.error(JSON.stringify(callVerificationSmsCode))
        return
      }
    }
    console.log('code:', callVerificationSmsCode.payload.code)
    console.log("antes del switch")
    let oReturn = callVerificationSmsCode
    switch (callVerificationSmsCode.payload.code) {
      case "password_reset_authorized":
        res.status(oReturn.message.http_status)
        res.json(oReturn)
        break;
      case "wrong_reset_code":
        res.status(oReturn.message.http_status)
        res.json(oReturn)
        break;
      case 'change_operation_not_requested':
        req.session.user_recover = null
        req.session.active_user = null
        break;
      case 'retries_exceeded':
        res.status(oReturn.message.http_status)
        res.json(oReturn)
        req.session.user_recover = null
        req.session.active_user = null
        break;
      case 'invalid_user':
        req.session.user_recover = null
        req.session.active_user = null
        break;
     default:
      break;
    }
  } catch (err) {
    console.error(err)
    const oReturn = {
    }
    oReturn.message = localConfig.SYSTEM_MESSAGES.operation_not_completed
    res.status(oReturn.message.http_status)
    res.json(oReturn)
  }
})

router.put('/process-verification-questions', upload.none(),  async (req, res) => {
  console.log('viene del email: ------>everyone: router.put(/process-verification-questions')
  try {
    const parAnswer1 = req.body.txtAnswer1
    const parAnswer2 = req.body.txtAnswer2
    const parAnswer3 = req.body.txtAnswer3
    console.log("id_user:" + req.session.user_recover.id_user );
    console.log('parAnswer1: ' + parAnswer1)
    console.log('parAnswer2: ' + parAnswer2)
    console.log('parAnswer3: ' + parAnswer3)
    req.session.user_token = null
    req.session.active_user = null
    req.session.active_user_qrcode = null
    req.session.login_user = null
    req.session.active_ministry = null
    const callVerificationQuestions = await SLNodeJs.SLRestCall('PUT', globalConfig.URLS.min_profile_backend + '/process-verification-questions', req,
      {
        id_user: req.session.user_recover.id_user,
        answer1: parAnswer1,
        answer2: parAnswer2,
        answer3: parAnswer3
      }
    )
    console.log('antes del error:')
    console.log('error:', callVerificationQuestions.message.error)
    if (callVerificationQuestions.message.error) {
      if (callVerificationQuestions.message.code === 'operation_not_completed') {
        console.error(JSON.stringify(callVerificationQuestions))
        return
      }
    }
    console.log('code:', callVerificationQuestions.payload.code)
    console.log("antes del switch")
    let oReturn = callVerificationQuestions
    switch (callVerificationQuestions.payload.code) {
      case "password_reset_authorized":
        res.status(oReturn.message.http_status)
        res.json(oReturn)
        break;
      case "wrong_reset_code":
        res.status(oReturn.message.http_status)
        res.json(oReturn)
        break;
      case 'change_operation_not_requested':
        req.session.user_recover = null
        req.session.active_user = null
        req.session.active_user_qrcode = null
        req.session.login_user = null
        break;
      case 'retries_exceeded':
        res.status(oReturn.message.http_status)
        res.json(oReturn)
        req.session.user_recover = null
        req.session.active_user = null
        req.session.active_user_qrcode = null
        req.session.login_user = null
        break;
      case 'invalid_user':
        req.session.user_recover = null
        req.session.active_user = null
        req.session.active_user_qrcode = null
        req.session.login_user = null
        break;
      default:
        break;
    }
  } catch (err) {
    console.error(err)
    const oReturn = {
    }
    oReturn.message = localConfig.SYSTEM_MESSAGES.operation_not_completed
    res.status(oReturn.message.http_status)
    res.json(oReturn)
  }
})

router.post('/change-password', (req, res) => {
  try {
    if (req.session.user_token) {
      res.redirect('/profile/admin')
      return
    }
    if (req.session.user_recover.id_user === null) {
      res.redirect('/profile/login')
      return
    }
    res.render('change-password', {
      req,
      LOCAL_STRINGS
    })
  } catch (err) {
    console.error(err)
    res.redirect('/profile/404')
  }
})

router.post('/user_change_password', upload.none(), async (req, res) => {
  console.log('everyone: router.post(/user_change_password')
  const parPassword = req.body.txtPassword1
  console.log('id_user', req.session.user_recover.id_user)
  console.log('password', parPassword)
  
  try {
    req.session.user_token = null
    req.session.active_user = null
    req.session.active_ministry = null
    const callChangePassword = await SLNodeJs.SLRestCall('PUT', globalConfig.URLS.min_profile_backend + '/user-change-password', req,
      {
        id_user: req.session.user_recover.id_user,
        password: parPassword,
        id_update: req.session.user_recover.id_user,
        id_login:-1
      }
    )
    console.log('valor:', callChangePassword.message.code)
    if ( callChangePassword.payload.code === 'password_changed_ok' ) {
      // envio de correo electronico para notificar
      const callSendEmail = await SLNodeJs.SLRestCall('POST', globalConfig.URLS.min_email_backend + '/send-email', req, {
        id_user_sent: -1,
        sent_title: req.session.system_email_title,
        sent_email: req.session.system_email,
        id_user_received: req.session.user_recover.id_user,
        received_email: req.session.user_recover.email,
        id_message_template: 6,
        code_process: 'user.change-password-success',
        id_ministry: -1,
        language: req.session.language,
        sent_status: 'sent',
        id_create: -1,
        id_login: -1,
        first_name: req.session.user_recover.first_name,
        last_name: req.session.user_recover.last_name,
        email: req.session.user_recover.email,
        user_name: req.session.user_recover.user_name
      })
    }
    const oReturn = callChangePassword
    console.log('valor:', callChangePassword)
    res.status(oReturn.message.http_status)
    res.json(oReturn)
  } catch (err) {
    console.error(err)
    const oReturn = {
    }
    oReturn.message = localConfig.SYSTEM_MESSAGES.operation_not_completed
    res.status(oReturn.message.http_status)
    res.json(oReturn)
  }
})

router.post('/generated-user-name', async (req, res) => {
  try {
    const parUserName = req.body.user_name
    const callGeneratedUserName = await SLNodeJs.SLRestCall('GET', globalConfig.URLS.min_profile_backend + '/generated-user-name', req,
      {
        user_name: parUserName
      }
    )
    if (callGeneratedUserName.message.error) {
      if (callGeneratedUserName.message.code === 'operation_not_completed') {
        res.status(callGeneratedUserName.message.http_status)
        res.json(callGeneratedUserName)
        return
      }
    }
    res.status(callGeneratedUserName.message.http_status)
    res.json(callGeneratedUserName)
  } catch (err) {
    console.error(err)
    const oReturn = {}
    oReturn.message = localConfig.SYSTEM_MESSAGES.operation_not_completed
    res.status(oReturn.message.http_status)
    res.json(oReturn)
  }
})

router.post('/is-existent-user-name', async (req, res) => {
  try {
    const parUserName = req.body.user_name
    const callExistentUserName = await SLNodeJs.SLRestCall('GET', globalConfig.URLS.min_profile_backend + '/is-existent-user-name', req,
      {
        user_name: parUserName
      }
    )
    if (callExistentUserName.message.error) {
      if (callExistentUserName.message.code === 'operation_not_completed') {
        res.status(callExistentUserName.message.http_status)
        res.json(callExistentUserName)
        return
      }
    }
    res.status(callExistentUserName.message.http_status)
    res.json(callExistentUserName)
  } catch (err) {
    console.error(err)
    const oReturn = {}
    oReturn.message = localConfig.SYSTEM_MESSAGES.operation_not_completed
    res.status(oReturn.message.http_status)
    res.json(oReturn)
  }
})

router.post('/is-existent-user-email', async (req, res) => {
  try {
    const parEmail = req.body.email
    const callExistentUserEmail = await SLNodeJs.SLRestCall('GET', globalConfig.URLS.min_profile_backend + '/is-existent-user-email', req,
      {
        email: parEmail
      }
    )
    if (callExistentUserEmail.message.error) {
      if (callExistentUserEmail.message.code === 'operation_not_completed') {
        res.status(callExistentUserEmail.message.http_status)
        res.json(callExistentUserEmail)
        return
      }
    }
    res.status(callExistentUserEmail.message.http_status)
    res.json(callExistentUserEmail)
  } catch (err) {
    console.error(err)
    const oReturn = {}
    oReturn.message = localConfig.SYSTEM_MESSAGES.operation_not_completed
    res.status(oReturn.message.http_status)
    res.json(oReturn)
  }
})

router.post('/is-existent-user-cell-phone', async (req, res) => {
  try {
    const parCellPhone = req.body.cell_phone
    const callExistentUserCellPhone = await SLNodeJs.SLRestCall('GET', globalConfig.URLS.min_profile_backend + '/is-existent-user-cell-phone', req,
      {
        cell_phone: parCellPhone
      }
    )
    if (callExistentUserCellPhone.message.error) {
      if (callExistentUserCellPhone.message.code === 'operation_not_completed') {
        res.status(callExistentUserCellPhone.message.http_status)
        res.json(callExistentUserCellPhone)
        return
      }
    }
    res.status(callExistentUserCellPhone.message.http_status)
    res.json(callExistentUserCellPhone)
  } catch (err) {
    console.error(err)
    const oReturn = {}
    oReturn.message = localConfig.SYSTEM_MESSAGES.operation_not_completed
    res.status(oReturn.message.http_status)
    res.json(oReturn)
  }
})

router.get('/sign-up', async (req, res) => {
  try {
    const callCountries = await SLNodeJs.SLRestCall('GET', globalConfig.URLS.min_profile_backend + '/countries', req,
      {
        language: req.session.language
      }
    )
    if (callCountries.message.error) {
      if (callCountries.message.code === 'operation_not_completed') {
        res.redirect('/profile/404')
        return
      }
    }
    const callDoctrines = await SLNodeJs.SLRestCall('GET', globalConfig.URLS.min_profile_backend + '/doctrines', req,
      {
        language: req.session.language
      }
    )
    if (callDoctrines.message.error) {
      if (callDoctrines.message.code === 'operation_not_completed') {
        res.redirect('/profile/404')
        return
      }
    }
    if (req.session.user_token) {
      res.redirect('/profile/admin')
      return
    }
    res.render('sign-up', {
      req,
      language: req.session.language,
      LOCAL_STRINGS,
      countries: callCountries.payload.countries,
      doctrines: callDoctrines.payload.doctrines
    })
  } catch (err) {
    console.error(err)
    res.redirect('/profile/404')
  }
})

router.post('/sign-up', upload.none(), async (req, res) => {
  try {
    const parFirstName = req.body.txtFirstName
    const parLastName = req.body.txtLastName
    const parUserName = req.body.txtUserName
    const parEmail = req.body.txtEmail
    console.log('txtFirstName', parFirstName)
    console.log('txtLastName', parLastName)
    console.log('txtUserName', parUserName)
    console.log('txtEmail', parEmail)
    console.log('selCountriesOfResidence', req.body.selCountriesOfResidence)
    const asCountryResidence = req.body.selCountriesOfResidence.split(',')
    const parIdCountryResidence = asCountryResidence[0]
    const parPhoneCode = asCountryResidence[2]
    const parTxtPhone = req.body.txtCellPhone
    const parCellPhone = parPhoneCode + req.body.txtCellPhone
    const asNationality = req.body.selNationality.split(',')
    const parIdNationality = asNationality[0]
    const parIdDoctrine = req.body.selDoctrine || 0;
    const parDoctrine = req.body.hid_doctrine.value || '';
    const parPassword = req.body.txtPassword
    const parGender = req.body.grpGender
    const parDateOfBirthOrig = req.body.txtDateOfBirth
    const parDateOfBirth = SLJavascript.SLRotateDate(req.body.txtDateOfBirth, req.session.date_format, req.session.date_separator, 'ymd', '-')
    console.log('asCountryResidence', asCountryResidence)
    console.log('parIdCountryResidence', parIdCountryResidence)
    console.log('parPhoneCode', parPhoneCode)
    console.log('parCellPhone', parCellPhone)
    console.log('parPassword', parPassword)
    console.log('parGender', parGender)
    console.log('parDateOfBirth', parDateOfBirth)
    console.log('parIdNationality', parIdNationality)
    console.log('parIdDoctrine', parIdDoctrine)
    console.log('selDoctrine', req.body.selDoctrine)
    req.session.user_token = null
    req.session.active_user = null
    req.session.active_ministry = null
    const callUserRegistration = await SLNodeJs.SLRestCall('POST', globalConfig.URLS.min_profile_backend + '/user-registration', req,
      {
        first_name: parFirstName,
        last_name: parLastName,
        user_name: parUserName,
        gender: parGender,
        date_of_birth: parDateOfBirth,
        id_country_residence: parIdCountryResidence,
        code_country_cell_phone: parPhoneCode,
        cell_phone: parCellPhone,
        email: parEmail,
        password: parPassword,
        id_nationality: parIdNationality,
        id_doctrine: parIdDoctrine,
        language: req.session.language,
        date_format: req.session.date_format,
        date_separator: req.session.date_separator,
        date_info: req.session.date_info
      }
    )
    console.log('callUserRegistration:', callUserRegistration)
    console.log('message.code', callUserRegistration.message.code)
    console.log('message.error', callUserRegistration.message.error)
    if (callUserRegistration.message.error) {
      if (callUserRegistration.message.code === 'operation_not_completed') {
        res.status(callUserRegistration.message.http_status)
        res.json(callUserRegistration)
      }
      res.status(callUserRegistration.message.http_status)
      res.json(callUserRegistration)
    }
    // OJO **********************
    // res.status(callUserRegistration.message.http_status)
    // res.json(callUserRegistration)
    console.log('usuario nuevo :', callUserRegistration.payload.result.id_user)
    console.log('parEmail :', parEmail)
    console.log('parCellPhone :', parCellPhone)
    console.log('doctrine :', parDoctrine)
    if (parEmail != "" ) {
      const callSendEmail = await SLNodeJs.SLRestCall('POST', globalConfig.URLS.min_email_backend + '/send-email', req, {
        id_user_sent: -1,
        sent_title: req.session.system_email_title,
        sent_email: req.session.system_email,
        id_user_received: callUserRegistration.payload.result.id_user,
        received_email: parEmail,
        id_message_template: 1,
        code_process: 'user.registration',
        id_ministry: -1,
        language: req.session.language,
        sent_status: 'sent',
        id_create: -1,
        id_login: -1,
        first_name: parFirstName,
        last_name: parLastName,
        email: parEmail,
        user_name: parUserName,
        birthdate: parDateOfBirthOrig,
        code_validation_email: callUserRegistration.payload.result.code_validation_email,
        cell_phone: parCellPhone,
        doctrine: parDoctrine,
        id_login: -1
      })
    }
    if (parTxtPhone != "" ) {
      try {
        const callSendSms = await SLNodeJs.SLRestCall('POST', globalConfig.URLS.min_sms_backend + '/send-sms', req, {
          id_device: 0,
          language: req.session.language,
          id_message_template: 1,
          code_process: 'user.registration',
          id_ministry: -1,
          id_user_sent: -1,
          id_user_received: callUserRegistration.payload.result.id_user,
          sent_sms: req.session.system_phone_number,
          received_sms: parCellPhone,
          cell_phone: parCellPhone,
          sent_status: 'sent',
          id_create: -1,
          first_name: parFirstName,
          last_name: parLastName,
          user_name: parUserName,
          birthdate: parDateOfBirthOrig,
          doctrine: parDoctrine,
          code_validation_sms: callUserRegistration.payload.result.code_validation_cellphone,
          id_login: -1
        })
      } catch (err) {
        console.error(err)
        res.redirect('/profile/404')
      }
    }
    res.status(callUserRegistration.message.http_status)
    res.json(callUserRegistration)
  } catch (err) {
    console.error(err)
    const oReturn = {}
    oReturn.message = localConfig.SYSTEM_MESSAGES.operation_not_completed
    res.status(oReturn.message.http_status)
    res.json(oReturn)
  }
})

router.post('/process-validation-resend-email-code', upload.none(), async (req, res) => {
  try {
    const parEmail = req.body.hid_email
    console.log('txtEmail', parEmail)
    req.session.user_token = null
    req.session.active_user = null
    req.session.active_ministry = null
    const callUserResendEmailCode = await SLNodeJs.SLRestCall('PUT', globalConfig.URLS.min_profile_backend + '/user-validation-resend-email-code', req,
      {
        email: parEmail
      }
    )
    console.log('callUserRegistration:', callUserResendEmailCode)
    console.log('message.code', callUserResendEmailCode.message.code)
    console.log('message.error', callUserResendEmailCode.message.error)
    if (callUserResendEmailCode.message.error) {
      if (callUserResendEmailCode.message.code === 'operation_not_completed') {
        res.status(callUserResendEmailCode.message.http_status)
        res.json(callUserResendEmailCode)
      }
      res.status(callUserResendEmailCode.message.http_status)
      res.json(callUserResendEmailCode)
    }
    // OJO **********************
    // res.status(callUserResendEmailCode.message.http_status)
    // res.json(callUserResendEmailCode)
    if (callUserResendEmailCode.message.code === 'resend_email_validation_code_ok') {
      console.log('resend code validation email :', callUserResendEmailCode.payload.id_user)
      let callSendEmail = {}
      callSendEmail.message = localConfig.SYSTEM_MESSAGES.operation_not_completed
      callSendEmail = await SLNodeJs.SLRestCall('POST', globalConfig.URLS.min_email_backend + '/send-email', req, {
        id_user_sent: -1,
        sent_title: req.session.system_email_title,
        sent_email: req.session.system_email,
        id_user_received: callUserResendEmailCode.payload.id_user,
        received_email: parEmail,
        id_message_template: 4,
        code_process: 'user.resend-validation-email-code',
        id_ministry: -1,
        language: req.session.language,
        sent_status: 'sent',
        id_create: -1,
        id_login: -1,
        first_name: callUserResendEmailCode.payload.first_name,
        last_name: callUserResendEmailCode.payload.last_name,
        email: parEmail,
        user_name: callUserResendEmailCode.payload.user_name,
        code_validation_email: callUserResendEmailCode.payload.code_validation_email
      })
      if (callSendEmail.message.code === 'completed_operation') {
        res.status(callUserResendEmailCode.message.http_status)
        res.json(callUserResendEmailCode)
      }
    }
  } catch (err) {
    console.error(err)
    const oReturn = {}
    oReturn.message = localConfig.SYSTEM_MESSAGES.operation_not_completed
    res.status(oReturn.message.http_status)
    res.json(oReturn)
  }
})

router.get('/process-validation-email-code', async (req, res) => {
  try {
    console.log('everyone: router.get(/process-validation-email-code')
    const parEmail = req.query.email ? req.query.email : ''
    const parCodeValidationEmail = req.query.code ? req.query.code : ''
    console.log('txtEmail', parEmail)
    console.log('txtCode', parCodeValidationEmail)

    req.session.user_token = null
    req.session.active_user = null
    req.session.active_ministry = null
    const callValidationEmail = await SLNodeJs.SLRestCall('PUT', globalConfig.URLS.min_profile_backend + '/process-validation-email-code', req,
      {
        email: parEmail,
        code: parCodeValidationEmail
      }
    )
    /*
      SELECT json_object('affected', true, 'id_user', _id_user, 'code', 'email_validation_ok', 'result_message', true);
    */
    console.log('valor:', callValidationEmail)
    if (callValidationEmail.message.error) {
      if (callValidationEmail.message.code === 'operation_not_completed') {
        console.error(JSON.stringify(callValidationEmail))
        return
      }
    }
    switch (callValidationEmail.message.code) {
      case 'email_validation_ok':
        req.session.temporal_render = {
          render: 'show-message',
          id_user: callValidationEmail.payload.id_user,
          title: LOCAL_STRINGS.email_validation,
          text: localConfig.SYSTEM_MESSAGES[callValidationEmail.payload.code],
          icon: 'success',
          confirm_button_text: LOCAL_STRINGS.ok,
          focus_confirm: false,
          show_cancel_button: false,
          cancel_button_text: '',
          reverse_buttons: true,
          confirm_url: '/profile/login',
          cancel_url: ''
        }
        break
      case 'email_validation_information_invalid':
        req.session.temporal_render = {
          render: 'show-message',
          id_user: callValidationEmail.payload.id_user,
          title: LOCAL_STRINGS.email_validation,
          text: localConfig.SYSTEM_MESSAGES[callValidationEmail.payload.code],
          icon: 'warning',
          confirm_button_text: LOCAL_STRINGS.ok,
          focus_confirm: false,
          show_cancel_button: false,
          cancel_button_text: '',
          reverse_buttons: true,
          confirm_url: '/profile/validation-email-code',
          cancel_url: ''
        }
        break
      case 'operation_not_completed':
        req.session.temporal_render = {
          render: 'show-message',
          id_user: callValidationEmail.payload.id_user,
          title: LOCAL_STRINGS.email_validation,
          text: localConfig.SYSTEM_MESSAGES[callValidationEmail.payload.code],
          icon: 'error',
          confirm_button_text: LOCAL_STRINGS.ok,
          focus_confirm: false,
          show_cancel_button: false,
          cancel_button_text: '',
          reverse_buttons: true,
          confirm_url: '/profile/validation-email-code',
          cancel_url: ''
        }
        break
      case 'email_had_already_validated':
        req.session.temporal_render = {
          render: 'show-message',
          id_user: callValidationEmail.payload.id_user,
          title: LOCAL_STRINGS.email_validation,
          text: localConfig.SYSTEM_MESSAGES[callValidationEmail.payload.code],
          icon: 'warning',
          confirm_button_text: LOCAL_STRINGS.ok,
          focus_confirm: false,
          show_cancel_button: false,
          cancel_button_text: '',
          reverse_buttons: true,
          confirm_url: '/profile/login',
          cancel_url: ''
        }
        break
      default:
        break
    }
    res.redirect('/profile/show-message')
  } catch (err) {
    console.error(err)
    res.redirect('/profile/404')
  }
})

router.post('/process-validation-email-code', upload.none(), async (req, res) => {
  console.log('everyone: router.post(/process-validation-email-code')
  const parEmail = req.body.hid_email
  const parCodeValidationEmail = req.body.txtCode
  console.log('txtEmail', parEmail)
  console.log('txtCode', parCodeValidationEmail)
  try {
    req.session.user_token = null
    req.session.active_user = null
    req.session.active_ministry = null
    const callValidationEmail = await SLNodeJs.SLRestCall('PUT', globalConfig.URLS.min_profile_backend + '/process-validation-email-code', req,
      {
        email: parEmail,
        code: parCodeValidationEmail,
        id_update: -1
      }
    )
    console.log('valor:', callValidationEmail.message.code)
    if ( callValidationEmail.message.code === 'email_validation_ok' ) {
      // envio de correo electronico para notificar
      const callSendEmail = await SLNodeJs.SLRestCall('POST', globalConfig.URLS.min_email_backend + '/send-email', req, {
        id_user_sent: -1,
        sent_title: req.session.system_email_title,
        sent_email: req.session.system_email,
        id_user_received: callValidationEmail.payload.id_user,
        received_email: parEmail,
        id_message_template: 3,
        code_process: 'user.validation-email-code',
        id_ministry: -1,
        language: req.session.language,
        sent_status: 'sent',
        id_create: -1,
        id_login: -1,
        first_name: callValidationEmail.payload.first_name,
        last_name: callValidationEmail.payload.last_name,
        email: parEmail,
        user_name: callValidationEmail.payload.user_name
      })
    }
    const oReturn = callValidationEmail
    console.log('valor:', callValidationEmail)
    res.status(oReturn.message.http_status)
    res.json(oReturn)
  } catch (err) {
    console.error(err)
    const oReturn = {
    }
    oReturn.message = localConfig.SYSTEM_MESSAGES.operation_not_completed
    res.status(oReturn.message.http_status)
    res.json(oReturn)
  }
})

router.post('/recover_find_account', upload.none(), async (req, res) => {
  console.log('everyone: router.post(/recover_find_account')
  const parKey = req.body.txtKey
  console.log('txtKey', parKey)
  try {
    req.session.user_token = null
    req.session.active_user = null
    req.session.active_ministry = null
    const callRecoverFindAccount = await SLNodeJs.SLRestCall('GET', globalConfig.URLS.min_profile_backend + '/recover-find-account', req,
      {
        key: parKey
      }
    )
    console.log('valor:', callRecoverFindAccount)
    console.log('message.code:', callRecoverFindAccount.message.code)
    console.log('recover_account:', callRecoverFindAccount.result)
    if (callRecoverFindAccount.message.code != 'operation_not_completed') {
      console.log("se lleno la variable de session: req.session.recover_account con los datos del usuario encontrado");
      req.session.recover_account = callRecoverFindAccount.result;
    }
    res.status(callRecoverFindAccount.message.http_status)
    res.json(callRecoverFindAccount)
  } catch (err) {
    console.error(err)
    const oReturn = {
    }
    oReturn.message = localConfig.SYSTEM_MESSAGES.operation_not_completed
    res.status(oReturn.message.http_status)
    res.json(oReturn)
  }
})

router.post('/user-code-validation-sms', async (req, res) => {
  try {
    const parValidationCcode = req.body.txt_code_validation_sms
    const parCellPhone = req.body.hid_cell_phone
    // const parUtcOffset = req.session.utc_offset
    req.session.user_token = null
    req.session.active_user = null
    req.session.active_ministry = null
    const userCodeValidationCellPhone = await SLNodeJs.SLRestCall('PUT', globalConfig.URLS.a_1_users + '/user-code-validation-cell-phone', req,
      {
        validation_code: parValidationCcode,
        cell_phone: parCellPhone
      }
    )
    if (userCodeValidationCellPhone.message.error) {
      if (userCodeValidationCellPhone.message.code === 'operation_not_completed') {
        res.status(userCodeValidationCellPhone.message.http_status)
        res.json(userCodeValidationCellPhone)
        return
      }
    }
    if (userCodeValidationCellPhone.rows[0].affected === false) {
      res.render('validation-sms-result', {
        result_message: userCodeValidationCellPhone.rows[0].result_message,
        status: localConfig.systemMessages[userCodeValidationCellPhone.rows[0].code][req.session.language],
        menu_profile: 'www',
        req,
        page_title: LOCAL_STRINGS.cell_phone_validation_result,
        LOCAL_STRINGS
      })
      return
    }
    const callUserById = await SLNodeJs.SLRestCall('GET', globalConfig.URLS.a_1_users + '/user-by-id', req,
      {
        id_enterprise: -1,
        id_user: userCodeValidationCellPhone.rows[0].id_user,
        date_format: req.session.date_format,
        date_separator: req.session.date_separator,
        utc_offset: req.session.utc_offset
      }
    )
    const oMessage = {
      id_enterprise: -1,
      id_message_template: 'user.registration_validation_ok',
      id_user_sent: 0,
      id_user_receive: userCodeValidationCellPhone.rows[0].id_user,
      in_status_sent: 's',
      id_create: 0,
      language: req.session.language
    }
    if (callUserById.rows[0].cell_phone) {
      oMessage.sms_template = {
        sent: req.session.system_phone_number,
        receive: callUserById.rows[0].cell_phone,
        first_name: callUserById.rows[0].first_name,
        last_name: callUserById.rows[0].last_name,
        user_name: callUserById.rows[0].user_name,
        message_welcome: LOCAL_STRINGS.process_user_registration_validation_ok_sms_1[req.session.language],
        welcome: LOCAL_STRINGS.welcome_only[req.session.language],
        team_a_1: LOCAL_STRINGS.team_a_1[req.session.language]
      }
    }
    oMessage.notify_template = {
      sent: req.session.system_phone_number,
      receive: '1234',
      // parCellPhone,
      //
      first_name: callUserById.rows[0].first_name,
      last_name: callUserById.rows[0].last_name,
      user_name: callUserById.rows[0].user_name,
      message_welcome: LOCAL_STRINGS.process_user_registration_validation_ok_sms_1[req.session.language],
      welcome: LOCAL_STRINGS.welcome_only[req.session.language]
    }
    const callSendEmail = await SLNodeJs.SLRestCall('POST', globalConfig.URLS.email_service + '/send-email', req, oMessage)
    if (callSendEmail.message.error) {
      if (callSendEmail.message.code === 'operation_not_completed') {
        res.status(callSendEmail.message.http_status)
        res.json(callSendEmail)
        return
      }
    }
    res.render('validation-sms-result', {
      result_message: userCodeValidationCellPhone.rows[0].result_message,
      status: localConfig.systemMessages[userCodeValidationCellPhone.rows[0].code][req.session.language],
      menu_profile: 'www',
      req,
      page_title: LOCAL_STRINGS.cell_phone_validation_result,
      LOCAL_STRINGS
    })
  } catch (err) {
    console.error(err)
    const oReturn = {}
    oReturn.message = localConfig.SYSTEM_MESSAGES.operation_not_completed
    res.status(oReturn.message.http_status)
    res.json(oReturn)
  }
})

router.get('/logout', async (req, res) => {
  try {
    if (req.session.user_token && req.session.active_user) {
      const callLogout = await SLNodeJs.SLRestCall('GET', globalConfig.URLS.min_profile_backend + '/logout', req,
        {
          id_user: req.session.active_user.id_user
        }
      )
      if (callLogout.message.code === 'user_logout') {
        req.session.user_token = null
        req.session.active_user = null
        req.session.active_user_qrcode = null
        req.session.login_user = null
        req.session.active_ministry = null
        res.redirect('/profile/login')
        return
      }
      console.error(callLogout.message)
    }
  } catch (err) {
    console.error(err)
  }
})

router.get('/404', (req, res) => {
  res.render('404', {
    req,
    LOCAL_STRINGS
  })
})

export default router
