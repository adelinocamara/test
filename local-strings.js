'use strict'
import * as localConfig from './local-config.js'

/*
  min-profile-web/2025.0.0
  Copyright (C) by Luis Silva & Adelino Camara. All Rights Reserved.
  Unauthorized use, copy, modify, fork, merge, publish, distribute, sublicense, sell, is strictly prohibited.
  Proprietary and confidential.
*/

export const LOCAL_STRINGS = Object.freeze({
  admins: {
    en: 'Admins',
    es: 'Administradores'
  },
  admins_ucase: {
    en: 'ADMINS',
    es: 'ADMINISTRADORES'
  },
  about_us: {
    en: 'About us',
    es: '¿Quienes somos?'
  },
  accept_associated_account: {
    en: 'Accept this invitation to manage the user account',
    es: 'Aceptar esta invitacion para administrar la cuenta de usuario'
  },
  accept_family_relationship: {
    en: 'Accept this family relationship',
    es: 'Aceptar esta relación familiar'
  },
  accept_this_associated_account: {
    en: 'Do you want to accept the invitation to start managing the (###) user account on myministries.app?',
    es: '¿Deseas aceptar la invitación para comenzar a administrar la cuenta de usuario de (###) en myministries.app?'
  },
  accept_this_family_relationship: {
    en: 'Do you want to accept this family relationship?',
    es: '¿Deseas aceptar esta relación familiar?'
  },
  account_authorization: {
    en: 'Account authorization',
    es: 'Autorización de cuenta'
  },
  account_authorization_accepted_text1: {
    en: 'I ',
    es: 'Yo '
  },
  account_authorization_accepted_text2: {
    en: ' authorized',
    es: ' le autorizo a '
  },
  account_authorization_accepted_text3: {
    en: ' since the day',
    es: ' desde el dia'
  },
  account_authorization_accepted_text4: {
    en: ' to administer and manage my user account on myministries.app',
    es: ' que administre y gestione mi cuenta de usuario en myministries.app'
  },
  account_authorization_request_sent_text1: {
    en: 'I ',
    es: 'Yo '
  },
  account_authorization_request_sent_text2: {
    en: 'have sent an invitation to',
    es: 'le he enviado una invitación a'
  },
  account_authorization_request_sent_text3: {
    en: ' the day',
    es: ' el día '
  },
  account_authorization_request_sent_text4: {
    en: ' to allow you to manage and administer my user account on myministries.app',
    es: ' para permitirle que administre y gestione mi cuenta de usuario en myministries.app'
  },
  account_authorization_request_sent_text1a: {
    en: 'sent me the day',
    es: 'me ha enviado el día '
  },
  account_authorization_request_sent_text2a: {
    en: 'an invitation with the authorization for me',
    es: 'una invitación con la autorización para que yo'
  },
  account_authorization_request_sent_text3a: {
    en: 'manage your user account on myministries.app',
    es: 'le administre su cuenta de usuario en myministries.app'
  },
  account_authorizations_all: {
    en: 'All authorizations',
    es: 'Todas las autorizaciones'
  },
  account_authorizations_without: {
    en: '¡There are still no authorizations!',
    es: '¡Aún no hay autorizaciones!'
  },
  account_info: {
    en: 'Account information',
    es: 'Información de la cuenta'
  },
  account_validation: {
    en: 'Validated account',
    es: 'Cuenta validada'
  },
  active: {
    en: 'Active',
    es: 'Activo'
  },
  address: {
    en: 'Address',
    es: 'Dirección'
  },
  address_billing: {
    en: 'Billing address',
    es: 'Dirección de facturación'
  },
  address_other: {
    en: 'Other address',
    es: 'Otra dirección'
  },
  additional_comment: {
    en: 'Additional comment',
    es: 'Comentario adicional'
  },
  age: {
    en: 'Age',
    es: 'Edad'
  },
  agree: {
    en: 'I agree',
    es: 'Estoy de acuerdo'
  },
  all: {
    en: 'All',
    es: 'Todas'
  },
  allowed_hyphens: {
    en: 'allowed hyphens (-)',
    es: 'guiones permitidos (-)'
  },
  allergies: {
    en: 'Allergies',
    es: 'Alergias'
  },
  already_registered: {
    en: 'Already registered?',
    es: '¿Ya estás registrado?'
  },
  and: {
    en: 'and',
    es: 'y'
  },
  an_option_is_required: {
    en: 'An option is required',
    es: 'Se requiere una opción'
  },
  anonymous_request: {
    en: 'Anonymous request',
    es: 'Solicitud anónima'
  },
  answer: {
    en: 'Answer',
    es: 'Respuesta'
  },
  answer_secret_questions: {
    en: 'Answer the secret questions',
    es: 'Responder las preguntas secretas'
  },
  apps: {
    en: 'Apps',
    es: 'Aplicaciones'
  },
  assisted_mobility: {
    en: 'Assisted mobility',
    es: 'Movilidad asistida'
  },
  associated_accounts: {
    en: 'Linked accounts',
    es: 'Cuentas vinculadas'
  },
  associated_accounts_accepted: {
    en: 'You are authorized to manage the account of (###) on myministries.app correctly',
    es: 'Estas autorizado a administrar la cuenta de (###) en myministries.app correctamente'
  },
  associated_accounts_add: {
    en: 'Send invitation to delegate my account',
    es: 'Enviar invitación para delegar mi cuenta'
  },
  associated_accounts_all: {
    en: 'All delegations',
    es: 'Todas las delegaciones'
  },
  associated_accounts_sent_by_me: {
    en: 'Sent by me',
    es: 'Enviadas por mi'
  },
  associated_accounts_received: {
    en: 'Received',
    es: 'Recibidas'
  },
  associated_accounts_deleted: {
    en: 'Delegation was deleted',
    es: 'Delegación fue borrada'
  },
  associated_accounts_without: {
    en: 'There are still no linked accounts!',
    es: '¡Aún no hay cuentas vinculadas!'
  },
  associated_accounts_already: {
    en: 'This user is already authorized to administer their account',
    es: 'Este usuario ya esta autorizado para administrar su cuenta'
  },
  associated_accounts_request_accepted: {
    en: 'Authorized to manage my account',
    es: 'Autorizado a administrar mi cuenta'
  },
  associated_accounts_request_sent: {
    en: 'Invitation sent',
    es: 'Invitación enviada'
  },
  associated_accounts_request_sent2: {
    en: 'Invitation received',
    es: 'Invitación recibida'
  },
  associated_accounts_request_pending: {
    en: 'Invitation pending responding',
    es: 'Invitación pendiente de responder'
  },
  associated_accounts_request_rejected: {
    en: 'Invitation rejected',
    es: 'Invitación Rechazada'
  },
  associated_accounts_request_received: {
    en: 'Request received',
    es: 'Solicitud recibida'
  },
  associated_accounts_requests_received: {
    en: 'Received',
    es: 'Recibidas'
  },
  associated_accounts_requests_pending: {
    en: 'Pending',
    es: 'Pendiente'
  },
  associated_accounts_do_you_accept: {
    en: 'Do you agree to manage this account?',
    es: '¿Aceptas administrar esta cuenta?'
  },
  associated_accounts_text_agree1: {
    en: 'By accepting, I declare that I have read',
    es: 'Al aceptar, declaró que he leído'
  },
  associated_accounts_text_agree2: {
    en: 'for delegating the administration of my account.',
    es: 'para delegar la administraccion de mi cuenta.'
  },
  associated_accounts_text_agree3: {
    en: 'to manage (###) user account.',
    es: 'para administrar la cuenta de (###).'
  },
  attention: {
    en: 'Attention!',
    es: '¡Atención!'
  },
  authorizations: {
    en: 'Authorizations',
    es: 'Autorizaciones'
  },
  baptism: {
    en: 'Baptism',
    es: 'Bautismo'
  },
  baptisms: {
    en: 'Baptisms',
    es: 'Bautismos'
  },
  baptized: {
    en: 'Baptized?',
    es: '¿Bautizado?'
  },
  baptized_for: {
    en: 'Baptized for',
    es: 'Bautizado por'
  },
  baptized_yes: {
    en: 'Already baptized',
    es: 'Ya bautizado'
  },
  baptized_no: {
    en: 'Not yet baptized',
    es: 'Aun no bautizado'
  },
  basic_data: {
    en: 'Basic data',
    es: 'Datos basicos'
  },
  bible: {
    en: 'Bible',
    es: 'Biblia'
  },
  bible_add: {
    en: 'Add a bible',
    es: 'Agregar una biblia'
  },
  bible_deleted: {
    en: 'Bible was deleted',
    es: 'Biblia fue borrada'
  },
  bible_setup_default: {
    en: 'The bible has been set by default',
    es: 'La biblia se ha establecido por defecto'
  },
  bibles: {
    en: 'Bibles',
    es: 'Biblias'
  },
  bibles_without: {
    en: 'There are no bibles, yet!',
    es: '¡Aún no hay biblias!'
  },
  blind: {
    en: 'Blind',
    es: 'Ciego'
  },
  blood_donate_to_give: {
    en: 'You can give donate to ',
    es: 'Puede dar donación a '
  },
  blood_donate_to_receive: {
    en: 'You can receive donation',
    es: 'Puede recibir donación de '
  },
  business: {
    en: 'Business',
    es: 'Negocios'
  },
  business_ucase: {
    en: 'BUSINESS',
    es: 'NEGOCIOS'
  },
  cancel: {
    en: 'Cancel',
    es: 'Cancelar'
  },
  cancel_this_operation: {
    en: 'Do you want cancel this operation?',
    es: '¿Desea cancelar esta operación?'
  },
  card: {
    en: 'Card',
    es: 'Tarjeta'
  },
  card_number: {
    en: 'Card number',
    es: 'Número de tarjeta'
  },
  card_name_on: {
    en: 'Name on card',
    es: 'Nombre en la tarjeta'
  },
  card_expiration_date: {
    en: 'Expiration date',
    es: 'Fecha de vencimiento'
  },
  card_cvv: {
    en: 'Security code (CVV)',
    es: 'Código de seguridad (CVV)'
  },
  card_deleted: {
    en: 'Card was deleted',
    es: 'La tarjeta fue borrada'
  },
  card_setup_default: {
    en: 'The card has been set by default',
    es: 'La tarjeta se ha establecido por defecto'
  },
  cards: {
    en: 'Cards',
    es: 'Tarjetas'
  },
  cards_all: {
    en: 'All cards',
    es: 'Todas las tarjetas'
  },
  cards_without: {
    en: 'There are no cards, yet!',
    es: '¡Aún no hay tarjetas!'
  },
  category: {
    en: 'Category',
    es: 'Categoria'
  },
  cell_phone: {
    en: 'Cell phone',
    es: 'Celular'
  },
  cell_phone_code_resend: {
    en: 'Do you want to receive a new code for the validation of your cell phone?',
    es: '¿Deseas recibir un nuevo código para la validación de su teléfono celular?'
  },
  cell_phone_fail: {
    en: 'Include the country code prefixed with +',
    es: 'Incluya el codigo del pais prefijado con +'
  },
  cell_phone_validation: {
    en: 'Cell phone validation',
    es: 'Validación de teléfono celular'
  },
  cell_phone_validation_information_invalid: {
    en: 'The cell phone validation information is invalid',
    es: 'La información de validación del telefono celular es inválida'
  },
  cell_phone_validation_successfully: {
    en: 'The cell phone associated with your account has been successfully validated',
    es: 'El telefono celular asociado a su cuenta ha sido validado satisfactoriamente'
  },
  cell_phone_had_already_validated: {
    en: 'The cell phone had already been validated',
    es: 'El telefono celular ya habia sido validado anteriormente'
  },
  cell_phone_not_validated: {
    en: `Not yet validated`,
    es: 'Aún no ha sido validado'
  },
  cell_phone_not_validated_message: {
    en: `The cell phone number associated with your account has not yet been validated!`,
    es: '!El número de celular asociado a su cuenta, aún no ha sido validado!'
  },
  cell_phone_validation_date: {
    en: 'Validation date',
    es: 'Fecha de validación'
  },
  cell_phone_validated: {
    en: `Validated`,
    es: 'Validado'
  },
  clear: {
    en: 'Clear',
    es: 'Limpiar'
  },
  change_email: {
    en: 'Change email',
    es: 'Cambiar correo electrónico'
  },
  change_cell_phone: {
    en: 'Change cell phone number',
    es: 'Cambiar numéro celular'
  },
  cell_phone_not_validated: {
    en: 'The cell phone has not yet been validated',
    es: 'El celular aun no ha sido validado'
  },
  change_cell_ok: {
    en: 'The cell phone number was changed successfully',
    es: 'El número celular fue cambiada exitosamente'
  },
  change_email_ok: {
    en: 'The email was changed successfully',
    es: 'El correo electrónico fue cambiado exitosamente'
  },
  change_email_email: {
    en: 'An email has been sent to you with a code to authorize this operation',
    es: 'Le ha sido enviado un correo electrónico con un código para autorizar esta operación'
  },
  change_operation_not_requested: {
    en: 'Change code not requested',
    es: 'Código de cambio no solicitado'
  },
  change_password: {
    en: 'Change password',
    es: 'Cambiar contraseña'
  },
  change_account_delegate: {
    en: 'Do you want to switch to XXX account?',
    es: '¿Quieres cambiar a la cuenta de XXX?'
  },
  change_account_delegate_success: {
    en: 'You are now in XXX account !!!',
    es: 'Ya estas en la cuenta de XXX !!!'
  },
  characters: {
    en: 'characters',
    es: 'caracteres'
  },
  check_emailed_code_4: {
    en: 'We send a 4-digit code to your email, check if you received it.',
    es: 'Enviamos un código de 4 dígitos a su correo electrónico, comprueba si lo recibiste.'
  },
  check_emailed_code_8: {
    en: 'We send an 8-character code to your email, check if you received it.',
    es: 'Enviamos un código de 8 caracteres a su correo electrónico, comprueba si lo recibiste.'
  },
  check_sms_code_4: {
    en: 'We send a 4-digit code to your phone, check if you received it.',
    es: 'Enviamos un código de 4 dígitos a celular, comprueba si lo recibiste.'
  },
  check_sms_code_6: {
    en: 'We send a 6-digit code to your phone, check if you received it.',
    es: 'Enviamos un código de 6 dígitos a celular, comprueba si lo recibiste.'
  },
  city: {
    en: 'City',
    es: 'Ciudad'
  },
  click_here: {
    en: 'Click here',
    es: 'Clic aquí'
  },
  create_a_ministry: {
    en: 'Create a ministry',
    es: 'Crear un ministerio'
  },
  create_a_ministry_declare_accept: {
    en: 'By creating a ministry, I declare that I have read and accepted',
    es: 'Al crear un ministerio, declaró que he leído y he aceptado'
  },
  create_an_account: {
    en: 'Create an account',
    es: 'Crear una cuenta'
  },
  code: {
    en: 'Code',
    es: 'Código'
  },
  code_to_authorize_email_change: {
    en: 'The code to authorize the email change is',
    es: 'El código para autorizar el cambio del correo electrónico es'
  },
  code_verification: {
    en: 'Code verification',
    es: 'Verificación de código'
  },
  condition: {
    en: 'Condition',
    es: 'Condición'
  },
  contact_us: {
    en: 'Contact us',
    es: 'Contáctenos'
  },
  contact_emergency: {
    en: 'Emergency contact',
    es: 'Contacto de emergencia'
  },
  continue: {
    en: 'Continue',
    es: 'Continuar'
  },
  company_name: {
    en: 'Company name',
    es: 'Nombre de compañia'
  },
  communications: {
    en: 'Communications',
    es: 'Comunicaciones'
  },
  copyright: {
    en: `Copyright © ${localConfig.SERVER.current_year} myministries.app - All rights reserved.`,
    es: `Copyright © ${localConfig.SERVER.current_year} myministries.app - Todos los derechos reservados.`
  },
  correct_format_legal_document: {
    en: 'The correct format is between 5 and 12 characters, may include hyphens (-)',
    es: 'El formato correcto es entre 5 y 12 caracteres, puede incluir guiones (-)'
  },
  correct_format_legal_document_example: {
    en: 'The correct format see example',
    es: 'El formato correcto ver ejemplo'
  },
  country: {
    en: 'Country',
    es: 'País'
  },
  country_of_residence: {
    en: 'Country of residence',
    es: 'País de residencia'
  },
  credit: {
    en: 'Credit',
    es: 'Crédito'
  },
  current: {
    en: 'Current',
    es: 'Actual'
  },
  current_status: {
    en: 'Current status',
    es: 'Estado actual'
  },
  data_medical: {
    en: 'Medical data',
    es: 'Datos médicos'
  },
  data_medical_tabular: {
    en: 'Tabular',
    es: 'Tabular'
  },
  data_medical_textual: {
    en: 'Textual',
    es: 'Textual'
  },
  date: {
    en: 'Date',
    es: 'Fecha'
  },
  date_from_error: {
    en: 'From date is wrong',
    es: 'Fecha desde es errónea'
  },
  date_from_must_be_higher_to_today: {
    en: 'The from date must be higher than the current date',
    es: 'La fecha desde debe ser superior a la fecha actual.'
  },
  date_from_no_higher_to_birth: {
    en: 'The date from must not be less than the date of birth',
    es: 'La fecha desde no debe ser inferior al nacimiento'
  },
  date_from_no_higher_12_months: {
    en: 'The from date must not be more than 12 months',
    es: 'La fecha desde no debe ser superior a 12 meses'
  },
  date_from_must_be_less_to_today: {
    en: 'The from date must be less than the current date',
    es: 'La fecha desde debe ser menor a la fecha actual'
  },
  date_of_bautism: {
    en: 'Date of bautism',
    es: 'Fecha de bautismo'
  },
  date_of_bautism_error: {
    en: 'Bautism date is wrong',
    es: 'Fecha de bautismo es errónea'
  },
  date_of_bautism_must_be_less_to_today: {
    en: 'The date of bautism must be less than the current date',
    es: 'La fecha de bautismo debe ser menor a la fecha actual'
  },
  date_of_conversion: {
    en: 'Date of conversion',
    es: 'Fecha de conversión'
  },
  date_of_conversion_error: {
    en: 'Conversion date is wrong',
    es: 'Fecha de conversión es errónea'
  },
  date_of_conversion_must_be_less_to_today: {
    en: 'The date of conversion must be less than the current date',
    es: 'La fecha de conversión debe ser menor a la fecha actual'
  },
  date_of_birth: {
    en: 'Date of birth',
    es: 'Fecha de nacimiento'
  },
  date_of_birth_info: {
    en: 'The format date is',
    es: 'El formato de fecha es'
  },
  date_of_birth_error: {
    en: 'Birth date is wrong',
    es: 'Fecha de nacimiento es errónea'
  },
  date_of_birth_must_be_less_to_today: {
    en: 'The date of birth must be less than the current date',
    es: 'La fecha de nacimiento debe ser menor a la fecha actual'
  },
  date_of_married_must_be_less_to_today: {
    en: 'The date of married must be less than the current date',
    es: 'La fecha de casamiento debe ser menor a la fecha actual'
  },
  date_of_format_info: {
    en: 'The format is',
    es: 'El formato es'
  },
  date_of_founded: {
    en: 'Date of founded',
    es: 'Fecha de fundado'
  },
  date_of_founded_error: {
    en: 'Date of founded is wrong',
    es: 'Fecha de fundado es errónea'
  },
  date_of_married: {
    en: 'Wedding date',
    es: 'Fecha de casamiento'
  },
  date_of_married_error: {
    en: 'Married date is wrong',
    es: 'Fecha de casamiento es errónea'
  },
  date_until_error: {
    en: 'Until date is wrong',
    es: 'Fecha hasta es errónea'
  },
  date_until_info01: {
    en: 'The until date must be greater than or equal to the from date',
    es: 'La fecha hasta debe ser mayor o igual a la fecha desde'
  },
  date_until_no_higher_12_months: {
    en: 'The until date must not be more than 12 months',
    es: 'La fecha hasta no debe ser superior a 12 meses'
  },
  dashboard: {
    en: 'Dashboard',
    es: 'Posición consolidada'
  },
  deaf: {
    en: 'Deaf',
    es: 'Sordo'
  },
  debit: {
    en: 'Debit',
    es: 'Débito'
  },
  decimal_error_code_validation_cell_phone: {
    en: 'Code validation is without decimals',
    es: 'El código de validación no puede contener decimales'
  },
  delegate_my_account: {
    en: 'Delegate my account',
    es: 'Delegar mi cuenta'
  },
  delegation_active: {
    en: 'Active delegation',
    es: 'Delegación activa'
  },
  delegation_from: {
    en: 'Active since',
    es: 'Activo desde'
  },
  delegations: {
    en: 'Delegations',
    es: 'Delegaciónes'
  },
  default: {
    en: 'Default',
    es: 'Por defecto'
  },
  delete: {
    en: 'Delete',
    es: 'Eliminar'
  },
  delete_associated_account_accepted: {
    en: 'Delete autorization to manage my account',
    es: 'Eliminar la autorización a administrar mi cuenta'
  },
  delete_associated_account_accepted2: {
    en: 'Delete autorization to manage the account of ',
    es: 'Eliminar la autorización para administrar la cuenta de'
  },
  delete_associated_account_request_sent: {
    en: 'Delete sent invitation (pending)',
    es: 'Eliminar invitación enviada (pendiente)'
  },
  delete_associated_account_request_sent2: {
    en: 'Delete invitation received to manage the account of ',
    es: 'Eliminar invitación recibida para administrar la cuenta de '
  },
  delete_card: {
    en: 'Delete card',
    es: 'Eliminar tarjeta'
  },
  delete_delegate_account: {
    en: 'Delete account delegation',
    es: 'Eliminar delegación de cuenta'
  },
  delete_family_relationship: {
    en: 'Delete family relationship',
    es: 'Eliminar relación familiar'
  },
  delete_gift_skill: {
    en: 'Delete gift/skill',
    es: 'Eliminar don/habilidad'
  },
  delete_legal_document: {
    en: 'Delete legal document',
    es: 'Eliminar documento legal'
  },
  delete_this_bible: {
    en: 'Do you want to delete this bible?',
    es: '¿Desea eliminar esta biblia?'
  },
  delete_this_card: {
    en: 'Do you want to delete this card?',
    es: '¿Desea eliminar esta tarjeta?'
  },
  delete_this_delegate_account: {
    en: 'Do you want to delete this account authorization?',
    es: '¿Desea eliminar esta autorización de cuenta?'
  },
  delete_this_disease: {
    en: 'Do you want to delete this disease?',
    es: '¿Desea eliminar esta enfermedad?'
  },
  delete_this_family_relationship: {
    en: 'Do you want to delete this family relationship?',
    es: '¿Desea eliminar esta relación familiar?'
  },
  delete_this_gift_skill: {
    en: 'Do you want to delete this gift/skill?',
    es: '¿Desea eliminar este don/habilidad?'
  },
  delete_this_legal_document: {
    en: 'Do you want to delete this legal document?',
    es: '¿Desea eliminar esta documento legal?'
  },
  digital_signature: {
    en: 'Digital signature',
    es: 'Firma digital'
  },
  disease: {
    en: 'Disease',
    es: 'Enfermedad'
  },
  diseases: {
    en: 'Diseases',
    es: 'Enfermedades'
  },
  diseases_all: {
    en: 'All diseases',
    es: 'Todas los enfermedades'
  },
  disease_add: {
    en: 'Add a disease',
    es: 'Agregar una enfermedad'
  },
  disease_calendar: {
    en: 'Date of onset and end of the disease',
    es: 'Fecha de inicio y fin de la enfermedad'
  },
  disease_deleted: {
    en: 'Disease was deleted',
    es: 'Enfermedad fue borrada'
  },
  disease_diagnosis: {
    en: 'Diagnosis',
    es: 'Diagnóstico'
  },
  disease_edit: {
    en: 'Edit a disease',
    es: 'Editar una enfermedad'
  },
  diseases_without: {
    en: 'There are no diseases, yet!',
    es: '¡Aún no hay enfermedades!'
  },
  divorced: {
    en: 'Divorced',
    es: 'Divorciado'
  },
  divorced_female: {
    en: 'Divorced',
    es: 'Divorciada'
  },
  do_you_want_to_validate: {
    en: 'Do you want to validate this?',
    es: '¿Desea validarlo?'
  },
  doctrinal_info: {
    en: 'Doctrinal info',
    es: 'Info doctrinal'
  },
  doctrine: {
    en: 'Doctrine',
    es: 'Doctrina'
  },
  doctrines: {
    en: 'Doctrines',
    es: 'Doctrinas'
  },
  documents: {
    en: 'Documents',
    es: 'Documentos'
  },
  documents_all: {
    en: 'All documents',
    es: 'Todas los documentos'
  },
  documents_without: {
    en: 'There are no documents, yet!',
    es: '¡Aún no hay documentos!'
  },
  does_not_exist: {
    en: 'Does not exist',
    es: 'No existe'
  },
  dominant: {
    en: 'Dominant',
    es: 'Dominante'
  },
  dont_have_account: {
    en: 'Don\'t have an account yet?',
    es: '¿Aún no tiene una cuenta?'
  },
  do_you_accept: {
    en: ' Do you accept?',
    es: '¿Aceptas?'
  },
  draw: {
    en: 'Draw',
    es: 'Dibujar'
  },
  ecommerce: {
    en: 'Ecommerce',
    es: 'Comercio electrónico'
  },
  edit: {
    en: 'Edit',
    es: 'Editar'
  },
  edit_doctrine: {
    en: 'Edit doctrine',
    es: 'Editar doctrina'
  },
  effective_date: {
    en: 'Effective date',
    es: 'Fecha vigencia'
  },
  email: {
    en: 'Email',
    es: 'Correo electrónico'
  },
  email_fail: {
    en: 'Email is wrong',
    es: 'Correo electrónico erróneo'
  },
  email_not_validated: {
    en: 'The email has not yet been validated',
    es: 'El correo electrónico aun no ha sido validado'
  },
  email_not_validated_message: {
    en: `Your account has not yet been validated, if you wish to receive the instructions again, press the send validation
        code via email`,
    es: `Su cuenta aún no ha sido validada, si desea recibir las instrucciones nuevamente, presione el botón enviar código
        de validación vía Correo electrónico`
  },
  email_code_resend: {
    en: 'Do you want to receive a new code for the validation of your email?',
    es: '¿Deseas recibir un nuevo código para la validación de su correo electrónico?'
  },
  email_code_password_resend: {
    en: 'Do you want to receive a new code to reset your password?',
    es: '¿Deseas recibir un nuevo código para el reseteo de la contraseña?'
  },
  emotion_how_feeling_today: {
    en: 'how are you feeling today?',
    es: ' ¿cómo te sientes hoy?'
  },
  emotion_would_like_pray_for: {
    en: 'Shall we pray for you?',
    es: '¿Oramos por ti?'
  },
  emotion_select_emotional_state: {
    en: 'Select your emotional state',
    es: 'Selecciona tu estado emocional'
  },
  emotion_remove_selection: {
    en: 'Remove selection',
    es: 'Quitar selección'
  },
  emotion_feel_good: {
    en: 'I feel good',
    es: 'Me siento bien'
  },
  emotion_feel_normal: {
    en: 'I feel normal',
    es: 'Me siento normal'
  },
  emotion_feel_bad: {
    en: 'I feel bad',
    es: 'Me siento mal'
  },
  emotion_not_now: {
    en: 'Not now',
    es: 'Ahora no'
  },
  emotion_pray: {
    en: 'We will pray about...',
    es: 'Oraremos sobre...'
  },
  emotion_send_state: {
    en: 'Send my emotional state',
    es: 'Enviar mi estado emocional'
  },
  emotion_share_why_to_pray: {
    en: 'Briefly share why you would like us to pray (optional)',
    es: 'Comparte brevemente por qué te gustaría que oremos (opcional)'
  },
  emotion_share_feeling: {
    en: 'What do you want to share?',
    es: '¿Qué deseas compartir?'
  },
  emotion_write_here: {
    en: 'Write your thoughts here...',
    es: 'Escribe aquí tu reflexión...'
  },
  emotion_write_pray: {
    en: 'Guide us in prayer',
    es: 'Guianos en la oración'
  },
  sms_code_resend: {
    en: 'Do you want to receive a new code to validate your cell phone number?',
    es: '¿Deseas recibir un nuevo código para la validación su número de teléfono celular?'
  },
  email_had_already_validated: {
    en: 'The email had already been validated',
    es: 'El correo electrónico ya habia sido validado anteriormente'
  },
  email_validation: {
    en: 'Email validation',
    es: 'Validación de correo electrónico'
  },
  email_not_validated: {
    en: `Not yet validated`,
    es: 'Aún no ha sido validado'
  },
  email_validation_date: {
    en: 'Validation date',
    es: 'Fecha de validación'
  },
  email_validated: {
    en: `Validated`,
    es: 'Validado'
  },
  email_validation_information_invalid: {
    en: 'The email validation information is invalid',
    es: 'La información de validación del email es inválida'
  },
  email_validation_successfully: {
    en: 'The email associated with your account has been successfully validated',
    es: 'El correo electrónico asociado a su cuenta ha sido validado satisfactoriamente'
  },
  emergency_contact: {
    en: 'Emergency contact',
    es: 'Contacto de emergencia'
  },
  employer: {
    en: 'Employer',
    es: 'Empleador'
  },
  english: {
    en: 'English',
    es: 'Ingles'
  },
  enterprise: {
    en: 'Enterprise',
    es: 'Empresa'
  },
  error: {
    en: 'Error',
    es: 'Error'
  },
  example: {
    en: 'Example',
    es: 'Ejemplo'
  },
  exit: {
    en: 'Exit',
    es: 'Salir'
  },
  expiration_date: {
    en: 'Expiration date',
    es: 'Fecha expiración'
  },
  equal_to_email: {
    en: 'Emails are different',
    es: 'Los correos electrónicos son diferentes'
  },
  equal_to_password: {
    en: 'Passwords are different',
    es: 'Las contraseñas son diferentes'
  },
  evaluations: {
    en: 'Evaluations',
    es: 'Evaluaciones'
  },
  family : {
    en: 'Family',
    es: 'Familiares'
  },
  family_relationship: {
    en: 'Family relationship',
    es: 'Relación familiar'
  },
  family_relationships: {
    en: 'Family relationships',
    es: 'Relaciones familiares'
  },
  family_status_requests_accepted: {
    en: 'Accepted',
    es: 'Aceptadas'
  },
  family_status_request_received: {
    en: 'Request received',
    es: 'Solicitud recibida'
  },
  family_status_requests_received: {
    en: 'received',
    es: 'Recibidas'
  },
  family_status_request_sent: {
    en: 'Request sent',
    es: 'Solicitud enviada'
  },
  family_status_requests_sent: {
    en: 'Sent',
    es: 'Enviadas'
  },
  family_status_accepted: {
    en: 'Accepted',
    es: 'Aceptada'
  },
  family_status_pending: {
    en: 'Pending',
    es: 'Pendiente'
  },
  family_status_received: {
    en: 'Received',
    es: 'Recibida'
  },
  family_status_rejected: {
    en: 'Rejected',
    es: 'Rechazada'
  },
  family_relationship_accepted: {
    en: 'The family relationship was accepted correctly',
    es: 'La relación familiar fue aceptada correctamente'
  },
  family_relationship_deleted: {
    en: 'Family relationship was deleted',
    es: 'Relación familiar fue borrada'
  },
  family_relationships_add: {
    en: 'Add a new family relationship',
    es: 'Agregar una nueva relación familiar'
  },
  family_relationships_all: {
    en: 'All relationships',
    es: 'Todas las relaciones'
  },
  family_relationships_without: {
    en: 'There are no family relationships, yet!',
    es: '¡Aún no hay relaciones familiares!'
  },
  female: {
    en: 'Female',
    es: 'Femenino'
  },
  find_account: {
    en: 'Find Your Account',
    es: 'Encuentra tu cuenta'
  },
  first_name: {
    en: 'First name',
    es: 'Nombre'
  },
  follower: {
    en: 'Follower',
    es: 'Seguidor'
  },
  followers: {
    en: 'Followers',
    es: 'Seguidores'
  },
  forgot_password: {
    en: 'Forgot the password?',
    es: '¿Olvidaste la contraseña?'
  },
  forgot_password_message_01: {
    en: 'Do not worry, first we will search for your account and then we will reset your password.',
    es: 'No te preocupes, primero vamos a buscar tu cuenta y posteriormente restableceremos tu contraseña.'
  },
  forgot_password_message_02: {
    en: 'Your account was found',
    es: 'Tu cuenta fue encontrada'
  },
  from: {
    en: 'From',
    es: 'Desde'
  },
  instructions: {
    en: 'Instructions',
    es: 'Instrucciones'
  },
  invitations: {
    en: 'Invitations',
    es: 'Invitaciones'
  },
  gender: {
    en: 'Gender',
    es: 'Género'
  },
  gifts_all: {
    en: 'All gifts',
    es: 'Todos los dones'
  },
  gifts_skills: {
    en: 'Gifts and skills',
    es: 'Dones y habilidades'
  },
  gifts_skills_add: {
    en: 'Add a gift or skill',
    es: 'Agregar un don ó habilidad'
  },
  gifts_skills_all: {
    en: 'All gifts and skills',
    es: 'Todas los dones y habilidades'
  },
  gift_skill_deleted: {
    en: 'Gift/skill was deleted',
    es: 'Don/habilidad fue borrada'
  },
  go_back: {
    en: 'Go back',
    es: 'Regresar'
  },
  granted: {
    en: 'Granted',
    es: 'Concedida'
  },
  greek: {
    en: 'Greek',
    es: 'Griego'
  },
  guardian: {
    en: 'Guardian',
    es: 'Tutor'
  },
  guardian_under_age: {
    en: 'Under-age',
    es: 'Menor de edad'
  },
  guardian_disability: {
    en: 'Disability',
    es: 'Discapacidad'
  },
  guardian_disease: {
    en: 'Disease',
    es: 'Enfermedad'
  },
  guardian_special_circumstances: {
    en: 'Special circumstances',
    es: 'Circunstancias especiales'
  },
  guardian_text_agree1: {
    en: 'By accepting, I declare that I have read',
    es: 'Al aceptar, declaró que he leído'
  },
  guardian_text_agree2: {
    en: 'to protect a user account.',
    es: 'para tutelar una cuenta de usuario.'
  },
  guardianship_reasons: {
    en: 'Reasons for guardianship',
    es: 'Razones del tutelaje'
  },
  guest: {
    en: 'Guest',
    es: 'Visitante'
  },
  guests: {
    en: 'Guests',
    es: 'Visitantes'
  },
  go_here: {
    en: 'Go here',
    es: 'Ir aquí'
  },
  hello: {
    en: 'Hello',
    es: 'Hola'
  },
  hobbies: {
    en: 'Gifts and skills ',
    es: 'Dones y habilidades'
  },
  hobbie_other: {
    en: 'Any other hobbies or skills?',
    es: '¿Alguna otra afición o habilidad?'
  },
  hobbie_play_music: {
    en: 'Do you play any instrument?',
    es: '¿Tocas algun instrumento?'
  },
  hobbie_sing: {
    en: 'You like to sing?',
    es: '¿Te gusta cantar?'
  },
  hobbie_sport: {
    en: 'Do you practice any sport?',
    es: '¿Practicas algún deporte?'
  },
  hobbie_tip: {
    en: 'Tip: you can place several separated by a comma (,)',
    es: 'Sugerencia: puedes colocar varios separados por coma (,)'
  },
  hobby: {
    en: 'Hobby',
    es: 'Pasatiempo'
  },
  how_do_you_want_to_reset_your_password: {
    en: 'How do you want to reset your password?',
    es: '¿Cómo quieres restablecer tu contraseña?'
  },
  husband: {
    en: 'Husband',
    es: 'Esposo'
  },
  if_dont_see_email: {
    en: 'If you don\'t see the email, check other places it might be, like your junk, spam, social, or other folders.',
    es: 'Si no ve el correo electrónico, verifique otros lugares en los que podría estar, como su basura, correo no deseado, redes sociales u otras carpetas.'
  },
  inbox: {
    en: 'Inbox',
    es: 'bandeja de entrada'
  },
  information_invalid: {
    en: 'The information is invalid',
    es: 'La información es inválida'
  },
  instructor: {
    en: 'Instructor',
    es: 'Instructor'
  },
  intensity_level: {
    en: 'Intensity level',
    es: 'Nivel de intensidad'
  },
  invalid_user: {
    en: 'Invalid user request',
    es: 'Petición de usuario inválido'
  },
  invalid_user_information: {
    en: 'This user information is not recorded',
    es: 'Esta información de usuario no esta registrada'
  },
  inventory: {
    en: 'Inventory',
    es: 'Inventario'
  },
  invoicing: {
    en: 'Invoicing',
    es: 'Facturación'
  },
  key: {
    en: 'Email / Phone / User name',
    es: 'Correo / Teléfono / Usuario'
  },
  languages_love_5: {
    en: '5 love languages',
    es: '5 lenguajes del amor'
  },
  language_name: {
    en: 'English',
    es: 'Español'
  },
  last_name: {
    en: 'Last name',
    es: 'Apellido'
  },
  latin: {
    en: 'Latin',
    es: 'Latin'
  },
  legal_document: {
    en: 'Legal document',
    es: 'Documento legal'
  },
  legal_document_add: {
    en: 'Add a new legal document',
    es: 'Agregar un nuevo documento legal'
  },
  legal_documents: {
    en: 'Legal documents',
    es: 'Documentos legales'
  },
  legal_document_add: {
    en: 'Add a new legal document',
    es: 'Agregar un nuevo documento legal'
  },
  legal_document_deleted: {
    en: 'The legal document was deleted',
    es: 'El documento legal fue borrada'
  },
  legal_document_setup_default: {
    en: 'The legal document has been set by default',
    es: 'El documento legal se ha establecido por defecto'
  },
  legal_information: {
    en: 'Legal information',
    es: 'Datos legales'
  },
  legal_type_documento: {
    en: 'Document type',
    es: 'Tipo de documento'
  },
  legal_type_driver_personal: {
    en: 'Driver\'s license',
    es: 'Licencia de conducir'
  },
  legal_type_identity: {
    en: 'Identity',
    es: 'Identidad'
  },
  legal_type_passport: {
    en: 'Passport',
    es: 'Pasaporte'
  },
  legal_type_tax_business: {
    en: 'Business tax',
    es: 'Tax comercial'
  },
  legal_type_tax_personal: {
    en: 'Personal tax',
    es: 'Tax personal'
  },
  legal_documents_without: {
    en: 'There are no legal documents, yet!',
    es: '¡Aún no hay documentos legales!'
  },
  level: {
    en: 'Level',
    es: 'Nivel'
  },
  level_low: {
    en: 'Low',
    es: 'Bajo'
  },
  level_medium: {
    en: 'Medium',
    es: 'Medio'
  },
  level_high: {
    en: 'High',
    es: 'Alto'
  },
  linkage: {
    en: 'Linkage',
    es: 'Vinculación'
  },
  login: {
    en: 'Login',
    es: 'Iniciar sesión'
  },
  login_security: {
    en: 'Security',
    es: 'Seguridad'
  },
  logout: {
    en: 'Log out',
    es: 'Desconectarse'
  },
  lose_all_your_responses: {
    en: 'You will lose all your current responses.',
    es: 'Perderás todas tus respuestas actuales.'
  },
  male: {
    en: 'Male',
    es: 'Masculino'
  },
  marital_status: {
    en:'Marital status',
    es:'Estado civil'
  },
  married: {
    en: 'Married',
    es: 'Casado'
  },
  married_female: {
    en: 'Married',
    es: 'Casada'
  },
  marketplace: {
    en: 'Marketplace',
    es: 'Mercado'
  },
  maxcharacters_additional_comment: {
    en: 'Additional comment must not exceed 100 characters',
    es: 'Comentario adicional no debe sobrepasar los 100 caracteres'
  },
  maxcharacters_address: {
    en: 'The address must not exceed 30 characters',
    es: 'La dirección no deberá sobrepasar los 30 caracteres'
  },
  maxcharacters_allergies: {
    en: 'Allergies must not exceed 50 characters',
    es: 'Alergias no deberá sobrepasar los 50 caracteres'
  },
  maxcharacters_answer: {
    en: 'Answer must not exceed 50 characters',
    es: 'Respuesta no deberá sobrepasar los 50 caracteres'
  },
  maxcharacters_card_name_on: {
    en: 'Name on card must not exceed 30 characters',
    es: 'El Nombre en la tarjeta no deberá sobrepasar los 30 caracteres'
  },
  maxcharacters_card_number: {
    en: 'Card number must not exceed 20 characters',
    es: 'El número de tarjeta no deberá sobrepasar los 20 caracteres'
  },
  maxcharacters_cell_phone: {
    en: 'Cell phone must not exceed 16 characters',
    es: 'El celular no debe sobrepasar los 16 caracteres'
  },
  maxcharacters_city: {
    en: 'City must not exceed 30 characters',
    es: 'Ciudad no debe sobrepasar los 30 caracteres'
  },
  maxcharacters_code_email_8: {
    en: 'Code must not exceed 8 characters',
    es: 'El código no debe sobrepasar los 8 caracteres'
  },
  maxcharacters_code_cell_phone_6: {
    en: 'Code must not exceed 6 characters',
    es: 'El código no debe sobrepasar los 6 caracteres'
  },
  maxcharacters_code_change_email: {
    en: 'Email change code must not exceed 8 characters',
    es: 'El código de cambio de correo electrónico no debe sobrepasar los 8 caracteres'
  },
  maxcharacters_code_verification_4: {
    en: 'Code must not exceed 8 digits',
    es: 'El código no debe sobrepasar los 4 dígitos'
  },
  maxcharacters_company_name: {
    en: 'company name must not exceed 30 characters',
    es: 'El nombre de empresa no deberá sobrepasar los 30 caracteres'
  },
  maxcharacters_cvv: {
    en: 'Card Verification Value (cvv) must not exceed 4 characters',
    es: 'Valor de verificación de tarjeta (cvv) no deberá sobrepasar los 4 caracteres'
  },
  maxcharacters_diagnosis: {
    en: 'Diagnosis must not exceed 100 characters',
    es: 'Diagnóstico no debe sobrepasar los 100 caracteres'
  },
  maxcharacters_disease: {
    en: 'Disease must not exceed 100 characters',
    es: 'Enfermedad no debe sobrepasar los 100 caracteres'
  },
  maxcharacters_email: {
    en: 'Email address must not exceed 255 characters',
    es: 'Correo electrónico no deberá sobrepasar los 255 caracteres'
  },
  maxcharacters_emotion_share: {
    en: 'Your reflection must not exceed 500 characters',
    es: 'Tu reflexión no deberá sobrepasar los 500 caracteres'
  },
  maxcharacters_employer: {
    en: 'Employer must not exceed 50 characters',
    es: 'Empleador no deberá sobrepasar los 50 caracteres'
  },
  maxcharacters_first_name: {
    en: 'First name must not exceed 30 characters',
    es: 'El Nombre completo no deberá sobrepasar los 30 caracteres'
  },
  maxcharacters_hobbie_other: {
    en: 'Other must not exceed 30 characters',
    es: 'Otros no deberá sobrepasar los 30 caracteres'
  },
  maxcharacters_hobbie_play_music: {
    en: 'Play musical instrument must not exceed 30 characters',
    es: 'Tocar instrumento musical no deberá sobrepasar los 30 caracteres'
  },
  maxcharacters_hobbie_sing: {
    en: 'Sing must not exceed 30 characters',
    es: 'Cantar no deberá sobrepasar los 30 caracteres'
  },
  maxcharacters_hobbie_sport: {
    en: 'The sports must not exceed 30 characters',
    es: 'Los deportes no deberán sobrepasar los 30 caracteres'
  },
  maxcharacters_last_name: {
    en: 'Last name must not exceed 30 characters',
    es: 'El apellido no deberá sobrepasar los 30 caracteres'
  },
  maxcharacters_legal_document: {
    en: 'The legal document must not exceed the maximum number of characters.',
    es: 'El documento legal no deberá sobrepasar el máximo de caracteres'
  },
  maxcharacters_legal_document_12: {
    en: 'The legal document must not exceed 12 characters',
    es: 'El documento legal no deberá sobrepasar los 12 caracteres'
  },
  maxcharacters_medical_contact: {
    en: 'The emergency contact must not exceed 50 characters',
    es: 'El contacto de emergencia no deberá sobrepasar los 50 caracteres'
  },
  maxcharacters_medical_notes: {
    en: 'The medical notes must not exceed 255 characters',
    es: 'Las notas medicas no deberá sobrepasar los 255 caracteres'
  },
  maxcharacters_medical_phone: {
    en: 'The emergency contact cell phone must not exceed 25 characters',
    es: 'El celular del contacto de emergencia no deberá sobrepasar los 25 caracteres'
  },
  maxcharacters_medical_relationship: {
    en: 'Relationship must not exceed 10 characters',
    es: 'Relación no deberá sobrepasar los 10 caracteres'
  },
  maxcharacters_ministry: {
    en: 'Ministry must not exceed 150 characters',
    es: 'Ministerio no deberá sobrepasar los 150 caracteres'
  },
  maxcharacters_ministry_main_service: {
    en: 'The main ministry service must not exceed 200 characters',
    es: 'El servicio principal del ministerio no deberá sobrepasar los 200 caracteres'
  },
  maxcharacters_ministry_subdomain: {
    en: 'Ministry subdomain must not exceed 150 characters',
    es: 'El subdominio del ministerio no deberá sobrepasar los 150 caracteres'
  },
  maxcharacters_mission: {
    en: 'Mission must not exceed 1000 characters',
    es: 'Misión no deberá sobrepasar los 1000 caracteres'
  },
  maxcharacters_occupation: {
    en: 'Occupation must not exceed 50 characters',
    es: 'La ocupación no debe sobrepasar los 50 caracteres'
  },
  maxcharacters_password: {
    en: 'Password must not exceed 25 characters',
    es: 'La contraseña no debe sobrepasar los 25 caracteres'
  },
  maxcharacters_prayer: {
    en: 'Your prayer guide must not exceed 25 characters',
    es: 'Tu guia en la oración no debe sobrepasar los 500 caracteres'
  },
  maxcharacters_sport_position: {
    en: 'The position must not exceed 30 characters',
    es: 'La posicion no deberán sobrepasar los 30 caracteres'
  },
  maxcharacters_tax_number: {
    en: 'Tax number must not exceed 20 characters',
    es: 'El Número de impuesto no deberá sobrepasar los 20 caracteres'
  },
  maxcharacters_title_achieved: {
    en: 'Title achieved must not exceed 20 characters',
    es: 'El Título alcanzado no deberá sobrepasar los 20 caracteres'
  },
  maxcharacters_testimony: {
    en: 'Testimony must not exceed 1000 characters',
    es: 'El testimonio no deberá sobrepasar los 1000 caracteres'
  },
  maxcharacters_user_name: {
    en: 'User name must not exceed 30 characters',
    es: 'El usuario no debe sobrepasar los 30 caracteres'
  },
  maxcharacters_zip_code: {
    en: 'Zip code must not exceed 12 characters',
    es: 'Código postal no deberá sobrepasar los 12 caracteres'
  },
  maxdigits_6: {
    en: 'Must not exceed 6 digits',
    es: 'No debe sobrepasar los 6 digitos'
  },
  maxnumber_code_validation_cell_phone: {
    en: 'Write the code validation less than 999 999',
    es: 'Escriba el código de validación menor a 999 999'
  },
  medical_condition: {
    en: 'Do you have any special conditions?',
    es: '¿Tiene usted alguna condición especial?'
  },
  medical_conditions: {
    en: 'Medical conditions',
    es: 'Condiciones medicas'
  },
  medical_data: {
    en: 'Medical data',
    es: 'Datos médicos'
  },
  medical_notes: {
    en: 'Medical notes',
    es: 'Notas médicas'
  },
  message: {
    en: 'Message',
    es: 'Mensaje'
  },
  message_ministry: {
    en: 'Write a ministry',
    es: 'Introduzca el ministerio'
  },
  message_ministry_main_service: {
    en: 'Write the main ministry service',
    es: 'Introduzca el servicio principal del ministerio'
  },
  message_ministry_subdomain: {
    en: 'Write the subdomain of ministry',
    es: 'Introduzca el subdominio del ministerio'
  },
  message_ministry_name: {
    en: 'Write the name of ministry',
    es: 'Introduzca el nombre del ministerio'
  },
  message_user_name: {
    en: 'Write a user name',
    es: 'Introduzca el usuario'
  },
  message_mission: {
    en: 'Write a mission',
    es: 'Introduzca la misión'
  },
  message_welcome: {
    en: 'Welcome',
    es: 'Bienvenido'
  },
  mincharacters_additional_comment: {
    en: 'Additional comment must contain at least 5 characters',
    es: 'Comentario adicional debe contener mínimo 5 caracteres'
  },
  mincharacters_address: {
    en: 'The address must contain a minimum of 5 characters',
    es: 'La dirección debe contener mínimo 5 caracteres'
  },
  mincharacters_answer: {
    en: 'The answer must contain a minimum of 3 characters',
    es: 'la respuesta debe contener mínimo 3 caracteres'
  },
  mincharacters_card_name_on: {
    en: 'The name on card must contain at least 5 characters',
    es: 'El Nombre en la tarjeta debe contener mínimo 5 caracteres'
  },
  mincharacters_card_number: {
    en: 'The card number must contain at least 12 characters',
    es: 'El número de tarjeta debe contener mínimo 12 caracteres'
  },
  mincharacters_cell_phone: {
    en: 'Cell phone must contain at least 10 characters',
    es: 'El celular debe contener mínimo 10 caracteres'
  },
  mincharacters_city: {
    en: 'City must contain at least 5 characters',
    es: 'Ciudad debe contener mínimo 5 caracteres'
  },
  mincharacters_code_email_8: {
    en: 'Code must contain at least 8 characters',
    es: 'El código debe contener mínimo 8 caracteres'
  },
  mincharacters_code_cell_phone_6: {
    en: 'Code must contain at least 6 characters',
    es: 'El código debe contener mínimo 6 caracteres'
  },
  mincharacters_code_verification_4: {
    en: 'Code must contain at least 4 digits',
    es: 'El código debe contener mínimo 4 dígitos'
  },
  mincharacters_code_change_email: {
    en: 'Email change code must contain at least 8 characters',
    es: 'El código de cambio de correo electrónico debe contener mínimo 8 caracteres'
  },
  mincharacters_company_name: {
    en: 'The company name must contain at least 5 characters',
    es: 'El nombre de empresa debe contener mínimo 2 caracteres'
  },
  mincharacters_cvv: {
    en: 'Card Verification Value (cvv) must contain at least 3 characters',
    es: 'Valor de verificación de tarjeta (cvv) debe contener mínimo 3 caracteres'
  },
  mincharacters_diagnosis: {
    en: 'Diagnosis must contain at least 5 characters',
    es: 'Diagnóstico debe contener mínimo 5 caracteres'
  },
  mincharacters_disease: {
    en: 'Disease must contain at least 5 characters',
    es: 'Enfermedad debe contener mínimo 5 caracteres'
  },
  mincharacters_emotion_share: {
    en: 'Your reflection must contain at least 5 characters',
    es: 'Tu reflexión deberia contener mínimo 5 caracteres'
  },
  mincharacters_first_name: {
    en: 'The first name must contain at least 2 characters',
    es: 'El nombre debe contener mínimo 2 caracteres'
  },
  mincharacters_last_name: {
    en: 'The last name must contain at least 2 characters',
    es: 'El apellido debe contener mínimo 2 caracteres'
  },
  mincharacters_legal_document: {
    en: 'The legal document must contain the minimum number of characters',
    es: 'El documento legal debe contener el mínimo de caracteres'
  },
  mincharacters_legal_document_5: {
    en: 'The legal document must contain at least 5 characters',
    es: 'El documento legal debe contener mínimo 5 caracteres'
  },
  mincharacters_ministry: {
    en: 'The ministry must contain a minimum of 3 characters',
    es: 'El ministerio debe contener mínimo 3 caracteres'
  },
  mincharacters_ministry_main_service: {
    en: 'The main ministry service must contain a minimum of 5 characters',
    es: 'El servicio principal del ministerio debe contener mínimo 5 caracteres'
  },
  mincharacters_ministry_subdomain: {
    en: 'The ministry subdomain must contain a minimum of 8 characters',
    es: 'El subdominio del ministerio debe contener mínimo 8 caracteres'
  },
  mincharacters_mission: {
    en: 'Mission must contain more than 50 characters',
    es: 'Misión debe contener más de 50 caracteres'
  },
  mincharacters_tax_number: {
    en: 'The tax number must contain at least 5 characters',
    es: 'El número de impuesto debe contener mínimo 5 caracteres'
  },
  mincharacters_testimony: {
    en: 'The testimony must contain at least 20 characters',
    es: 'El testimonio debe contener mínimo 20 caracteres'
  },
  mincharacters_user_name: {
    en: 'User name must contain at least 8 characters',
    es: 'El usuario debe contener mínimo 8 caracteres'
  },
  mincharacters_password: {
    en: 'Password must contain at least 8 characters',
    es: 'La contraseña debe contener mínimo 8 caracteres'
  },
  mincharacters_pray: {
    en: 'Your prayer guide must contain at least 5 characters',
    es: 'Tu guia en la oración debe contener mínimo 5 caracteres'
  },
  mincharacters_zip_code: {
    en: 'The zip code name must contain at least 8 characters',
    es: 'El código postal debe contener mínimo 8 caracteres'
  },
  mindigits_6: {
    en: 'Must contain at least 6 digits',
    es: 'Debe contener mínimo 6 digitos'
  },
  ministerial_profile: {
    en: 'Ministerial Profile',
    es: 'Perfil ministerial'
  },
  ministries: {
    en: 'Ministries',
    es: 'Ministerios'
  },
  ministries_by_cities: {
    en: 'Ministries by cities',
    es: 'Ministerios por ciudades'
  },
  ministries_not_found: {
    en: 'Ministries not found',
    es: 'Ministerios no encontrados'
  },
  ministry: {
    en: 'Ministry',
    es: 'Ministerio'
  },
  ministry_created_success: {
    en: 'Ministry successfully registered',
    es: 'Ministerio registrado exitosamente'
  },
  ministry_existence_verified: {
    en: 'The existence of this ministry and the responsible Shepherd has been verified',
    es: 'La existencia de este ministerio y del Pastor responsable ha sido verificada'
  },
  ministry_information: {
    en: 'Ministry information',
    es: 'Información del ministerio'
  },
  ministry_info_follow: {
    en: 'Do you want follow this ministry?',
    es: '¿Quieres seguir este ministerio?'
  },
  ministry_name: {
    en: 'Ministry name',
    es: 'Nombre del ministerio'
  },
  ministry_main_service: {
    en: 'Main service (eg. praise, music, family support, etc)',
    es: 'Servicio principal (ej. alabanza, musica, apoyo familiar, etc)'
  },
  ministry_service: {
    en: 'Service',
    es: 'Servicio'
  },
  ministry_setup_default: {
    en: 'The ministry has been set by default',
    es: 'El ministerio se ha establecido por defecto'
  },
  ministry_subdomain: {
    en: 'Subdomain of ministry',
    es: 'Subdominio del ministerio'
  },
  ministry_was_created: {
    en: 'The ministry was created',
    es: 'El ministerio fué creado'
  },
  ministry_was_created_successfully: {
    en: 'The ministry was created successfully',
    es: 'El ministerio fué creado exitosamente'
  },
  my_bibles: {
    en: 'My bibles',
    es: 'Mis biblias'
  },
  my_bibles_all: {
    en: 'All my bibles',
    es: 'Todas mis biblias'
  },
  my_ministry:{
    en: 'My ministry',
    es: 'Mi ministerio'
  },
  my_records: {
    en: 'My records',
    es: 'Mis registros'
  },
  guardianship: {
    en: 'Guardianship',
    es: 'Tutela'
  },
  guardianship_all: {
    en: 'All my guardianships',
    es: 'Todas mis tutelas'
  },
  guardianship_without: {
    en: 'There are no guardianships yet!',
    es: '¡Aún no hay tutelas!'
  },
  guardianship_add: {
    en: 'Add a guardianship',
    es: 'Agregar una tutela'
  },
  missing_number: {
    en: 'Password must contain a number',
    es: 'La contraseña debe contener un número'
  },
  missing_special_character: {
    en: 'Password must contain a special character',
    es: 'La contraseña debe contener un carácter especial'
  },
  missing_uppercase: {
    en: 'Password must contain a capital letter',
    es: 'La contraseña debe contener una mayúscula'
  },
  my_ministries: {
    en: 'My ministries',
    es: 'Mis ministerios'
  },
  my_ministries_add: {
    en: 'Add a new ministry',
    es: 'Agregar un nuevo ministerio'
  },
  my_ministries_all: {
    en: 'All ministries',
    es: 'Todas los ministerios'
  },
  my_ministries_without: {
    en: 'There are no ministry relationships yet!',
    es: '¡Aún no hay relaciones con ministerios!'
  },
  my_profile: {
    en: 'My profile',
    es: 'Mi perfil'
  },
  name: {
    en: 'Name',
    es: 'Nombre'
  },
  nationality: {
    en: 'Nationality',
    es: 'Nacionalidad'
  },
  member: {
    en: 'Member',
    es: 'Miembro'
  },
  members: {
    en: 'Members',
    es: 'Miembros'
  },
  new: {
    en: 'New',
    es: 'Nuevo'
  },
  new_believer: {
    en: 'New believer',
    es: 'Nuevo creyente'
  },
  new_believers: {
    en: 'New believers',
    es: 'Nuevos creyentes'
  },
  new_cell_phone: {
    en: 'New cell phone number',
    es: 'Nuevo numéro celular'
  },
  new_email: {
    en: 'New email',
    es: 'Nuevo correo electrónico'
  },
  new_password: {
    en: 'New password',
    es: 'Nueva contraseña'
  },
  next: {
    en: 'Next',
    es: 'Siguiente'
  },
  no: {
    en: 'No',
    es: 'No'
  },
  notifications: {
    en: 'Notifications',
    es: 'Notificaciones'
  },
  notifications_all: {
    en: 'All notifications',
    es: 'Todas las notificaciones'
  },
  notifications_info: {
    en: 'Information',
    es: 'Información'
  },
  notifications_platform: {
    en: 'Platform',
    es: 'Plataforma'
  },
  notifications_systems: {
    en: 'Processes',
    es: 'Procesos'
  },
  notifications_ministries: {
    en: 'Ministries',
    es: 'Ministerios'
  },
  notifications_users: {
    en: 'Users',
    es: 'Usuarios'
  },
  notifications_warning: {
    en: 'Warning',
    es: 'Advertencia'
  },
  notifications_without: {
    en: 'There are no notifications, yet!',
    es: '¡Aún no hay notificaciones!'
  },
  notifications_error: {
    en: 'Important',
    es: 'Importante'
  },
  number_error_code_validation_cell_phone: {
    en: 'Validation code is wrong',
    es: 'Código de validación es incorrecta'
  },
  occupation: {
    en: 'Occupation',
    es: 'Ocupación'
  },
  of: {
    en: 'of',
    es: 'de'
  },
  ok: {
    en: 'Ok',
    es: 'Aceptar'
  },
  operation_not_completed: {
    en: 'Operation not completed',
    es: 'Operación no completada'
  },
  other_accounts: {
    en: 'Other accounts',
    es: 'Otras cuentas'
  },
  page_not_found: {
    en: 'Page not found',
    es: 'Página no encontrada'
  },
  password: {
    en: 'Password',
    es: 'Contraseña'
  },
  password_already_exists: {
    en: 'This password had already been recently used',
    es: 'Esta contraseña ya ha sido usada recientemente'
  },
  password_change_authorized: {
    en: 'Password change is authorized',
    es: 'El cambio de contraseña es autorizado'
  },
  password_changed_ok: {
    en: 'Password was changed successfully',
    es: 'La contraseña fue cambiada correctamente'
  },
  password_current: {
    en: 'Enter your current password',
    es: 'Introduzca su contraseña actual'
  },
  password_validation_code: {
    en: 'Password reset code validation',
    es: 'Validación del código para el reseteo de contraseña'
  },
  password_repeat: {
    en: 'Password repeat',
    es: 'Repetir contraseña'
  },
  password_requirements: {
    en: 'You must include a capital letter, a number and a special character',
    es: 'Usted deberá incluir una mayúscula, un numero y un carácter especial'
  },
  parameters: {
    en: 'Parameters',
    es: 'Parámetros'
  },
  payment_method_add: {
    en: 'Add a new payment method',
    es: 'Agregar un nuevo método de pago'
  },
  pending: {
    en: 'pending',
    es: 'pendiente'
  },
  permissions: {
    en: 'Permissions',
    es: 'Permisos'
  },
  personal: {
    en: 'Personal',
    es: 'Personal'
  },
  personal_information: {
    en: 'Personal data',
    es: 'Datos personales'
  },
  photo: {
    en: 'Photo',
    es: 'Foto'
  },
  photos: {
    en: 'Photos',
    es: 'Fotos'
  },
  photo_profile: {
    en: 'Profile photo',
    es: 'Foto del perfil'
  },
  pos: {
    en: 'Point of sale',
    es: 'Punto de venta'
  },
  position: {
    en: 'Position',
    es: 'Posición'
  },
  prayer_requests: {
    en: 'Prayer requests',
    es: 'Pedidos de oración'
  },
  previous: {
    en: 'Previous',
    es: 'Anterior'
  },
  privacy_policies: {
    en: 'The Privacy Policy',
    es: 'Las Políticas de Privacidad'
  },
  professional: {
    en: 'Professional',
    es: 'Profesional'
  },
  professional_information: {
    en: 'Professional data',
    es: 'Datos profesionales'
  },
  products: {
    en: 'Products',
    es: 'Productos'
  },
  process_change_password_authorized: {
    en: 'Authorized password change',
    es: 'Cambio de contraseña autorizado'
  },
  process_cell_phone_verification: {
    en: 'Cell phone verification process',
    es: 'Proceso de verificación del teléfono celular'
  },
  process_email_verification: {
    en: 'Email verification process',
    es: 'Proceso de verificación de correo electrónico'
  },
  process_email_validation_code_verification_password: {
    en: 'Code validation process for password reset via email',
    es: 'Proceso de validación de código para el reseteo de la contraseña via correo electrónico'
  },
  process_sms_validation_code_verification_password: {
    en: 'Code validation process for password reset via SMS',
    es: 'Proceso de validación de código para el reseteo de la contraseña via SMS'
  },
  profile: {
    en: 'Profile',
    es: 'Perfil'
  },
  posts: {
    en: 'Posts',
    es: 'Publicaciones'
  },
  question: {
    en: 'Question',
    es: 'Pregunta'
  },
  questions: {
    en: 'Questions',
    es: 'Preguntas'
  },
  questions_answers: {
    en: 'Questions and answers',
    es: 'Preguntas y respuestas'
  },
  reason: {
    en: 'Reason',
    es: 'Razon'
  },
  record_not_found: {
    en: 'Record not found',
    es: 'Registro no encontrado'
  },
  relationship: {
    en: 'Relationship',
    es: 'Relación'
  },
  register_ministry: {
    en: 'Register a ministry',
    es: 'Registrar un ministerio'
  },
  register_user: {
    en: 'Register a user',
    es: 'Registrar un usuario'
  },
  registration_i_agree: {
    en: 'I agree with',
    es: 'Estoy de acuerdo con'
  },
  registration_required_agree: {
    en: 'Accept the Terms of Use and Privacy Policy are required',
    es: 'Aceptar los Términos de Uso y la Política de Privacidad son requerido'
  },
  registration_required_email_phone: {
    en: 'It is necessary to enter an email address and/or a cell phone number.',
    es: 'Es necesario ingresar una dirección de correo electrónico y/o un número de teléfono celular.'
  },
  registration_select_to_validate: {
    en: 'Select the email address and/or cell phone number to validate.',
    es: 'Seleccione la dirección de correo electrónico y/o el número de teléfono celular para validar.'
  },

  registry: {
    en: 'Registry',
    es: 'Registrar'
  },
  repeat_email: {
    en: 'Repeat the email',
    es: 'Repita el correo electrónico'
  },
  repeat_password: {
    en: 'Repeat the password',
    es: 'Repita la contraseña'
  },
  requests: {
    en: 'Requests',
    es: 'Solicitudes'
  },
  required: {
    en: 'Required',
    es: 'Requerido'
  },
  required_additional_comment: {
    en: 'Additional comment is required',
    es: 'Comentario adicional es requerido'
  },
  required_address: {
    en: 'The address is required',
    es: 'Dirección es requerido'
  },
  required_answer: {
    en: 'Answer is required',
    es: 'Respuesta es requerido'
  },
  required_baptized: {
    en: 'baptized is required',
    es: 'bautizado es requerido'
  },
  required_bible: {
    en: 'Bible is required',
    es: 'Biblia es requerido'
  },
  required_card_name_on: {
    en: 'Name on card is required',
    es: 'Nombre en la tarjeta es requerido'
  },
  required_card_number: {
    en: 'Card number is required',
    es: 'Número de tarjeta es requerido'
  },
  required_cell_phone: {
    en: 'Cell phone is required',
    es: 'Celular es requerido'
  },
  required_city: {
    en: 'City is required',
    es: 'Ciudad es requerido'
  },
  required_code: {
    en: 'Code is required',
    es: 'El código es requerido'
  },
  required_code_change_email: {
    en: 'Email change code is required',
    es: 'El código de cambio de correo electrónico es requerido'
  },
  required_company_name: {
    en: 'Company name is required',
    es: 'Nombre de empresa es requerido'
  },
  required_country: {
    en: 'Country is required',
    es: 'País es requerido'
  },
  required_country_of_residence: {
    en: 'Country of residence is required',
    es: 'País de residencia es requerido'
  },
  required_cvv: {
    en: 'Card Verification Value (cvv) is required',
    es: 'Valor de verificación de tarjeta (cvv) es requerido'
  },
  required_current_status: {
    en: 'Current status is required',
    es: 'Estado actual es requerido'
  },
  required_date_effective: {
    en: 'Effective date is required',
    es: 'Fecha vigencia es requerido'
  },
  required_date_of_bautism: {
    en: 'Bautism date is required',
    es: 'Fecha de bautismo es requerido'
  },
  required_date_of_birth: {
    en: 'Birth date is required',
    es: 'Fecha de nacimiento es requerido'
  },
  required_date_of_conversion: {
    en: 'Conversion date is required',
    es: 'Fecha de conversión es requerido'
  },
  required_date_of_founded: {
    en: 'Founded date is required',
    es: 'Fecha de fundado es requerido'
  },
  required_date_from: {
    en: 'From date is required',
    es: 'Fecha desde es requerido'
  },
  required_date_until: {
    en: 'Until date is required',
    es: 'Fecha hasta es requerido'
  },
  required_date_of_married: {
    en: 'Married date is required',
    es: 'Fecha de casamiento es requerido'
  },
  required_diagnosis: {
    en: 'Diagnosis is required',
    es: 'Diagnóstico es requerido'
  },
  required_digital_signature: {
    en: 'Digital signature is required',
    es: 'Firma digital es requerido'
  },
  required_disease: {
    en: 'Disease is required',
    es: 'Enfermedad es requerido'
  },
  required_doctrine: {
    en: 'Doctrine is required',
    es: 'Doctrina es requerido'
  },
  required_email: {
    en: 'Email is required',
    es: 'Correo electrónico es requerido'
  },
  required_emotion_share: {
    en: 'Your reflection is required',
    es: 'Tu reflexión es requerido'
  },
  required_expiration_month: {
    en: 'Expiration month is required',
    es: 'Mes de vencimiento es requerido'
  },
  required_expiration_year: {
    en: 'Expiration year is required',
    es: 'Año de vencimiento es requerido'
  },
  required_family_relationship: {
    en: 'Family relationship is required',
    es: 'Relación familiar es requerido'
  },
  required_first_name: {
    en: 'First name is required',
    es: 'Nombre es requerido'
  },
  required_gender: {
    en: 'Gender is required',
    es: 'Género es requerido'
  },
  required_guardianship_reason: {
    en: 'Reason for guardianship is required',
    es: 'Razon de la tutela es requerido'
  },
  required_last_name: {
    en: 'Last name is required',
    es: 'Apellido es requerido'
  },
  required_legal_document: {
    en: 'Level document is required',
    es: 'Documento legal es requerido'
  },
  required_level: {
    en: 'Level is required',
    es: 'Nivel es requerido'
  },
  required_key: {
    en: 'Email / Phone / User name is required',
    es: 'Correo / Teléfono / Usuario es requerido'
  },
  required_marital_status: {
    en: 'Marital status is required',
    es: 'Estado civil es requerido'
  },
  required_ministry: {
    en: 'Ministry is required',
    es: 'Ministerio es requerido'
  },
  required_ministry_main_service: {
    en: 'Main ministry service is required',
    es: 'Servicio principal del ministerio es requerido'
  },
  required_ministry_name: {
    en: 'Name of ministry is required',
    es: 'Nombre del ministerio es requerido'
  },
  required_ministry_subdomain: {
    en: 'Ministry subdomain is required',
    es: 'Subdominio del ministerio es requerido'
  },
  required_mission: {
    en: 'Mission is required',
    es: 'Misión es requerido'
  },
  required_nationality: {
    en: 'Nationality is required',
    es: 'Nacionalidad es requerido'
  },
  required_password: {
    en: 'Password is required',
    es: 'Contraseña es requerida'
  },
  required_play_music: {
    en: 'Musical instrument is required',
    es: 'Instrumento musical es requerido'
  },
  required_pray: {
    en: 'Your guidance in prayer would help us a lot',
    es: 'Tu guia en la oración nos ayudaria mucho'
  },
  required_prayer_trouble: {
    en: 'Troubles is required',
    es: 'Problemas es requerido'
  },
  required_prayer_trouble_text: {
    en: 'Select at least one trouble for the prayer.',
    es: 'Seleccione al menos un problema para la oración.'
  },
  required_profile_image: {
    en: 'Profile photo is required',
    es: 'Foto del perfil es requerido'
  },
  required_recover: {
    en: 'Select a method recovery is required',
    es: 'Seleccionar un método de recuperación es requerido'
  },
  required_repeat_password: {
    en: 'The repeat password is required',
    es: 'Debe repetir la contraseña'
  },
  required_signature: {
    en: 'Signature is required',
    es: 'Firma es requerido'
  },
  required_school_level: {
    en: 'School level is required',
    es: 'Nivel escolar es requerido'
  },
  required_securityquestion_1: {
    en: 'Security question 1 is required',
    es: 'Pregunta de seguridad 1 es requerido'
  },
  required_securityquestion_2: {
    en: 'Security question 2 is required',
    es: 'Pregunta de seguridad 2 es requerido'
  },
  required_securityquestion_3: {
    en: 'Security question 3 is required',
    es: 'Pregunta de seguridad 3 es requerido'
  },
  required_state: {
    en: 'State is required',
    es: 'Estado es requerido'
  },
  required_sport: {
    en: 'Sport is required',
    es: 'Deporte es requerido'
  },
  required_tax_number: {
    en: 'Tax number is required',
    es: 'Número de impuesto es requerido'
  },
  required_type: {
    en: 'Type is required',
    es: 'Tipo es requerido'
  },
  required_type_card: {
    en: 'Card type is required',
    es: 'Tipo de tarjeta es requerido'
  },
  required_type_disease: {
    en: 'Type of disease is required',
    es: 'Tipo de enfermedad es requerido'
  },
  required_testimony: {
    en: 'Testimony is required',
    es: 'Testimonio es requerido'
  },
  required_timezone: {
    en: 'Time zone is required',
    es: 'Zona horario es requerido'
  },
  required_user_name: {
    en: 'User name is required',
    es: 'Usuario es requerido'
  },
  required_zip_code: {
    en: 'Zip code is required',
    es: 'Código postal es requerida'
  },
  reset_password: {
    en: 'Reset password',
    es: 'Restablecer contraseña'
  },
  reset_password_email: {
    en: 'An email has been sent to you with the information to reset your password',
    es: 'Le ha sido enviado un correo electrónico con la información para restablecer su contraseña'
  },
  reset_password_instructions: {
    en: 'To reset your password, click the following button and follow the instructions',
    es: 'Para restablecer su contraseña, haga clic en el siguiente botón y siga las instrucciones'
  },
  results: {
    en: 'Results',
    es: 'Resultados'
  },
  restart_test_question: {
    en: 'Restart test?',
    es: '¿Reiniciar test?'
  },
  restart_yes: {
    en: 'Yes, restart',
    es: 'Sí, reiniciar'
  },
  retries_exceeded:{
    en: 'Exceeded the limit of attempts',
    es: 'Excedió el limite de intentos'
  },
  return_to: {
    en: 'Return to',
    es: 'Volver a'
  },
  root: {
    en: 'Root',
    es: 'Admin'
  },
  school_level: {
    en: 'School level',
    es: 'Nivel escolar'
  },
  search: {
    en: 'Search',
    es: 'Buscar'
  },
  search_ministry: {
    en: 'Search ministry',
    es: 'Buscar ministerio'
  },
  secondary: {
    en: 'Secondary',
    es: 'Secundario'
  },
  security_questions: {
    en: 'Security questions',
    es: 'Preguntas de seguridad'
  },
  select: {
    en: 'Select',
    es: 'Seleccionar'
  },
  select_an_option: {
    en: 'Select an option',
    es: 'Selecciona una opción'
  },
  select_bible: {
    en: 'Select a bible',
    es: 'Seleccione una biblia'
  },
  select_category: {
    en: 'Select a category',
    es: 'Seleccione una categoria'
  },
  select_country: {
    en: 'Select a country',
    es: 'Seleccione un país'
  },
  select_current_status: {
    en: 'Select a current status',
    es: 'Seleccione un estado actual'
  },
  select_disease: {
    en: 'Select a disease',
    es: 'Seleccione una enfermedad'
  },
  select_doctrine: {
    en: 'Select a doctrine',
    es: 'Seleccione una doctrina'
  },
  select_family_relationship: {
    en: 'Select a family relationship',
    es: 'Seleccione una relación familiar'
  },
  select_guardianship_reason: {
    en: 'Select a reason',
    es: 'Seleccione una razon'
  },
  select_nationality: {
    en: 'Select a nationality',
    es: 'Seleccione una nacionalidad'
  },
  select_play_music: {
    en: 'Select a musical instrument',
    es: 'Seleccione un instrumento musical'
  },
  select_securityquestion_1: {
    en: 'Select security question 1',
    es: 'Seleccione la pregunta de seguridad 1'
  },
  select_securityquestion_2: {
    en: 'Select security question 2',
    es: 'Seleccione la pregunta de seguridad 2'
  },
  select_securityquestion_3: {
    en: 'Select security question 3',
    es: 'Seleccione la pregunta de seguridad 3'
  },
  select_skill: {
    en: 'Select a skill',
    es: 'Seleccione una habilidad'
  },
  select_sport: {
    en: 'Select a sport',
    es: 'Seleccione un deporte'
  },
  select_state: {
    en: 'Select a state',
    es: 'Seleccione un estado'
  },
  select_timezone: {
    en: 'Select a timezone',
    es: 'Seleccione una zona horaria'
  },
  select_school_level: {
    en: 'Select your school level',
    es: 'Seleccione su nivel escolar'
  },
  select_typelegal: {
    en: 'Select a document type',
    es: 'Seleccione un tipo de documento'
  },
  select_typedisease: {
    en: 'Select a type of disease',
    es: 'Seleccione un tipo de enfermedad'
  },
  select_typeblood: {
    en: 'Select your blood group',
    es: 'Seleccione su grupo sanguíneo'
  },
  send: {
    en: 'Send',
    es: 'Enviar'
  },
  send_code_by_email: {
    en:'Send validation code by email',
    es:'Enviar código de validación por correo electronico'
  },
  send_code_by_sms: {
    en: 'Send code by SMS',
    es: 'Enviar código por SMS'
  },
  sender: {
    en: 'Sender',
    es: 'Remitente'
  },
  separated: {
    en: 'Separated',
    es: 'Separado'
  },
  separated_female: {
    en: 'Separated',
    es: 'Separada'
  },
  set_default_bible:{
    en: 'Set this bible as default',
    es: 'Establecer esta biblia por defecto'
  },
  set_default_card:{
    en: 'Set this card as default',
    es: 'Establecer esta tarjeta por defecto'
  },
  set_default_ministry:{
    en: 'Set this ministry as default',
    es: 'Establecer este ministerio por defecto'
  },
  set_default_my_ministry_home: {
    en: 'You have not defined your main ministry [your congregation] yet, do you want to do it now?',
    es: 'Aún no has definido tu ministerio principal [tu congregación], ¿quieres hacerlo ahora?'
  },
  set_default_this_bible: {
    en: 'Do you want to set this bible as default?',
    es: '¿Desea establecer por defecto esta biblia?'
  },
  set_default_this_card: {
    en: 'Do you want to set this card as default?',
    es: '¿Desea establecer por defecto esta tarjeta?'
  },
  set_default_this_legal_document: {
    en: 'Do you want to set this legal document as default?',
    es: '¿Desea establecer por defecto este documento legal?'
  },
  set_default_this_ministry: {
    en: 'Do you want to set this ministry as default?',
    es: '¿Desea establecer por defecto este ministerio?'
  },
  set_questions_security: {
    en: 'These questions and their respective answers were set by you in your user profile.',
    es: 'Estas preguntas y sus respectivas respuestas fueron fijadas por usted en su perfil de usuario.'
  },
  shepherds: {
    en: 'Shepherds',
    es: 'Pastores'
  },
  shepherd: {
    en: 'Shepherd',
    es: 'Pastor'
  },
  shepherdess: {
    en: 'Shepherdess',
    es: 'Pastora'
  },
  sign_in: {
    en: 'Sign in',
    es: 'Iniciar sesión'
  },
  sign_up: {
    en: 'Sign up',
    es: 'Registrarse'
  },
  single: {
    en: 'Single',
    es: 'Soltero'
  },
  single_female: {
    en: 'Single',
    es: 'Soltera'
  },
  skills_gifts_parameters: {
    en: 'Gifts/Skills',
    es: 'Dones/Habilidades'
  },
  skills_gifts_without: {
    en: 'There are no gifts and skills, yet!',
    es: '¡Aún no hay dones y habilidades!'
  },
  skills_gifts_spirit: {
    en: 'Spiritual gifts',
    es: 'Dones espirituales'
  },
  skills_gifts_sports: {
    en: 'Sports',
    es: 'Deportes'
  },
  skills_gifts_musicals: {
    en: 'Musicals skills',
    es: 'Musicales'
  },
  skills_gifts_generals: {
    en: 'General skills',
    es: 'Habilidades generales'
  },
  sms: {
    en: 'SMS',
    es: 'Mensaje de texto'
  },
  sorry_page_not_found: {
    en: 'Sorry the page was not found',
    es: 'Lo sentimos la página no fue encontrada'
  },
  spanish: {
    en: 'Spanish',
    es: 'Español'
  },
  state: {
    en: 'State',
    es: 'Estado'
  },
  states: {
    en: 'States',
    es: 'Estados'
  },
  status: {
    en: 'Status',
    es: 'Estados'
  },
  strengths: {
    en: 'Strengths',
    es: 'Fortalezas'
  },
  successful_email_change: {
    en: 'Successful email change',
    es: 'Cambio de correo electrónico exitoso'
  },
  successful_registration: {
    en: 'Successful registration',
    es: 'Registro exitoso'
  },
  successful_registration_user: {
    en: 'Your user account has been successfully registered.',
    es: 'Se ha registrado exitosamente su cuenta de usuario'
  },
  successful_request: {
    en: 'Successful request',
    es: 'Solicitud exitosa'
  },
  supervised: {
    en: 'Supervised',
    es: 'Tutelado'
  },
  switch_account: {
    en: 'Switch account',
    es: 'Cambiar de cuenta'
  },
  tax_annual_reports: {
    en: 'Annual reports',
    es: 'Reportes anuales'
  },
  tax_data: {
    en: 'Tax data',
    es: 'Datos fiscal'
  },
  tax_information: {
    en: 'Tax information',
    es: 'Información fiscal'
  },
  tax_number: {
    en: 'Tax number',
    es: 'Número fiscal'
  },
  team_a_1: {
    en: 'Team a-1.app',
    es: 'Equipo a-1.app'
  },
  terms_of_use: {
    en: 'The Terms of Use',
    es: 'Los Términos de Uso'
  },
  temperaments: {
    en: 'Temperaments',
    es: 'Temperamentos'
  },
  temperament_my: {
    en: 'My temperament',
    es: 'Mi temperamento'
  },
  temperament_your: {
    en: 'Your temperament',
    es: 'Tu temperamento'
  },
  temperament_sanguine: {
    en: 'Sanguine',
    es: 'Sanguíneo'
  },
  temperament_choleric: {
    en: 'Choleric',
    es: 'Colérico'
  },
  temperament_melancholic: {
    en: 'Melancholic',
    es: 'Melancólico'
  },
  temperament_phlegmatic: {
    en: 'Phlegmatic',
    es: 'Flemático'
  },
  test_temperament: {
    en: 'Temperament test',
    es: 'Test de temperamento'
  },
  test_temperament_without: {
    en: 'There are no temperament tests yet!',
    es: '¡Aún no hay test de temperamentos!'
  },
  test_questions_want_todo: {
    en: 'I want to take the test',
    es: 'Quiero hacer el test'
  },
  testimony: {
    en: 'Testimony',
    es: 'Testimonio'
  },
  thickness: {
    en: 'Thickness',
    es: 'Grosor'
  },
  thickness_line: {
    en: 'Line thickness',
    es: 'Grosor de linea'
  },
  timezone: {
    en: 'Time zone',
    es: 'Zona horaria'
  },
  timezones: {
    en: 'Time zones',
    es: 'Zonas horarias'
  },
  title_achieved: {
    en: 'Title achieved',
    es: 'Título alcanzado'
  },
  title_recover: {
    en: 'Select a password recovery option',
    es: 'Selecciona una opción de recuperación de su contraseña'
  },
  transactions: {
    en: 'Transactions',
    es: 'Transacciones'
  },
  trouble: {
    en: 'Trouble',
    es: 'Problema'
  },
  troubles: {
    en: 'Troubles',
    es: 'Problemas'
  },
  type: {
    en: 'Type',
    es: 'Tipo'
  },
  types: {
    en: 'Types',
    es: 'Tipos'
  },
  type_card: {
    en: 'Type card',
    es: 'Tipo de tarjeta'
  },
  type_card_info_1: {
    en: 'Card that ends in ....',
    es: 'Tarjeta que termina en ....'
  },
  type_card_credit_info_1: {
    en: 'Credit card that ends in ....',
    es: 'Tarjeta de crédito que termina en ....'
  },
  type_card_debit_info_1: {
    en: 'Debit card that ends in ....',
    es: 'Tarjeta de débito que termina en ....'
  },
  types_diseases: {
    en: 'Types of diseases',
    es: 'Tipos de enfermedades'
  },
  types_blood: {
    en: 'Blood type',
    es: 'Grupo sanguíneo'
  },
  unauthorized_user: {
    en: 'Unauthorized user',
    es: 'Usuario no autorizado'
  },
  understood: {
    en: 'Understood',
    es: 'Entendido'
  },
  unfollow_ministry: {
    en: 'Unfollow ministry',
    es: 'Dejar de seguir el ministerio'
  },
  unfollow_this_ministry: {
    en: 'Do you want to unfollow this ministry?',
    es: '¿Quieres dejar de seguir este ministerio?'
  },
  unfollow_ministry_stopped: {
    en: 'The ministry has been stopped following',
    es: 'Se ha dejado de seguir el ministerio'
  },
  until: {
    en: 'Until',
    es: 'Hasta'
  },
  unread: {
    en: 'Unread',
    es: 'No leído'
  },
  upload_info_1: {
    en: 'Drag & Drop your picture or',
    es: 'Arrastra y suelta tu imagen o'
  },
  upload_info_2: {
    en: 'Browse',
    es: 'Navegar'
  },
  update_testimony: {
    en: 'Edit testimony',
    es: 'Editar testimonio'
  },
  update: {
    en: 'Update',
    es: 'Actualizar'
  },
  user: {
    en: 'User',
    es: 'Usuario'
  },
  users: {
    en: 'Users',
    es: 'Usuarios'
  },
  user_relationship_already: {
    en: 'This user already has a family relationship associated with you',
    es: 'Este usuario ya tiene asociada una relación familiar contigo'
  },
  user_relationship_already2: {
    en: 'It is the same user logged in',
    es: 'Es el mismo usuario sesionado'
  },
  user_code_validation_email_ok: {
    en: `We are very happy that you have completed the validation of your account, which will allow you to enjoy all
        the services and contents `,
    es: `Estamos muy felices que hayas completado la validación de tu cuenta, lo que te permitirá disfrutar de todos
        los servicios y contenidos `
  },
  user_code_validation_email_ok_location: {
    en: 'List of businesses near your community, according to zip code, state, country and commercial area',
    es: 'Listado de comercios cerca de tu comunidad, según codígo postal, estado, país y rubro comercial'
  },
  user_code_validation_email_resend: {
    en: 'New cell phone validation code has been sent',
    es: 'Nuevo código de validación de correo electrónico ha sido enviado'
  },
  user_code_validation_cell_phone_resend: {
    en: 'New email validation code has been sent',
    es: 'Nuevo código de validación de teléfono celular ha sido enviado'
  },
  user_password_reset_code_email_resend: {
    en: 'A new code has been sent to your email',
    es: 'Se ha enviado un nuevo código a su correo electrónico'
  },
  user_create_instructions_sms: {
    en: 'We sent you the validation code to your cell phone',
    es: 'Le hemos enviado el código de validación a su telefono celular'
  },
  user_name: {
    en: 'User name',
    es: 'Nombre de usuario'
  },
  user_registration_email_intro_1: {
    en: `It is a company dedicated to supplying the needs of those
        organizations that have a vision to make a difference in their communities
        through the establishment of new churches and ministries.
        We believe in helping those who feel the call to lead
        within the Body of Christ, and we have designed our programs to serve ministers
        in carrying out God call in their lives.\n
        Our products are designed to help you
        manage and support all operational and administrative processes,
        you can dedicate more of your time to effectively reach those around you.`,
    es: `es una compañia dedicada a suplir las necesidades de aquellas
        organizaciones que tienen una visión de hacer una diferencia en sus comunidades por
        medio del establecimiento de nuevas iglesias y ministerios. <br /><br />
        Nosotros creemos en ayudar a aquellos que sienten el llamado a liderar dentro del
        Cuerpo de Cristo, y hemos diseñado nuestros programas para servir a ministros en
        llevar a cabo el llamado de Dios en sus vidas. <br /><br />
        Nuestros productos esta diseñado para ayudarlo a administrar, gestionar y apoyar,
        todos los procesos operativos y administrativos, usted pueda dedicar más de su
        tiempo para efectivamente alcanzar a aquellos a su alrededor. <br /><br /> `
  },
  user_registration_declare_accept: {
    en: 'By registering, I declare that I have read and accepted',
    es: 'Al registrarse, declaró que he leído y he aceptado'
  },
  validate: {
    en: 'Validate',
    es: 'Validar'
  },
  validate_account: {
    en: 'Validate your account email',
    es: 'Validar el email de su cuenta'
  },
  validate_email: {
    en: 'Validate your email',
    es: 'Validar su email'
  },
  validate_email_step1: {
    en: 'Send validation code',
    es: 'Enviar codigo de validación'
  },
  validation_information_cell_phone_code_review: {
    en: 'Please review the validation code that has been sent to your cell phone',
    es: 'Por favor, revise el código de validación que se le ha enviado a su telefono celular'
  },
  validation_information_email: {
    en: 'Please review the validation code that has been sent to your email',
    es: 'Por favor, revise el código de validación que se le ha enviado a su correo electrónico'
  },
  validation_information_email_code_review: {
    en: 'Please review the validation code that has been sent to your email',
    es: 'Por favor, revise el código de validación que se le ha enviado a su correo electrónico'
  },
  validation_information_phone: {
    en: 'A validation code has been sent to your cell phone via SMS.',
    es: 'Se le a enviado via SMS, un código de validación a su teléfono celular.'
  },
  validation_information_phone_code_review: {
    en: 'Please review the validation code that has been sent to your cell phone',
    es: 'Por favor, revise el código de validación que se le ha enviado a su telefono celular'
  },
  validation_code_request:{
    en: 'Request validation code',
    es: 'Solicitar código de validación'
  },
  validate_phone: {
    en: 'Validate your phone',
    es: 'Validar su teléfono'
  },
  validate_user_name_info_login: {
    en: 'Your account is not yet validated by email',
    es: 'Su cuenta aun no esta validada por correo electrónico '
  },
  verify: {
    en: 'Verify',
    es: 'Verificar'
  },
  verification_answers: {
    en: 'Check answers',
    es: 'Verificar respuestas'
  },
  videos: {
    en: 'Videos',
    es: 'Videos'
  },
  wallet: {
    en: 'Wallet',
    es: 'Billetera'
  },
  warning: {
    en: 'Warning',
    es: 'Advertencia'
  },
  weaknesses: {
    en: 'Weaknesses',
    es: 'Debilidades'
  },
  we_emailed_code: {
    en: 'We emailed a code ',
    es: 'Enviamos un código por correo electrónico'
  },
  wheelchair: {
    en: 'Wheelchair or walker',
    es: 'Silla de ruedas o andador'
  },
  widowed: {
    en: 'Widowed',
    es: 'Viudo'
  },
  widowed_female: {
    en: 'Widowed',
    es: 'Viuda'
  },
  view_results: {
    en: 'view results',
    es: 'ver resultados'
  },
  wife: {
    en: 'Wife',
    es: 'Esposa'
  },
  wrong_code: {
    en: 'Wrong validation code',
    es: 'Código de validación incorrecto'
  },
  wrong_password: {
    en: 'Wrong password',
    es: 'Contraseña incorrecta'
  },
  wrong_questions_answers: {
    en: 'Your answers are wrong',
    es: 'Sus respuestas son incorrectas'
  },
  wrong_questions_answers_text: {
    en: 'do not match those stored in your user profile',
    es: 'no coinciden con las almacenadas en su perfil de usuario'
  },
  wrong_reset_code: {
    en: 'Wrong validation code',
    es: 'Código de validación incorrecto'
  },
  you_are_unlikely_older_100_years: {
    en: 'You are unlikely to be older than 100 years',
    es: 'Es poco probable que usted sea mayor a 100 años'
  },
  you_are_unlikely_older_120_years: {
    en: 'You are unlikely to be older than 120 years',
    es: 'Es poco probable que usted sea mayor a 120 años'
  },
  you_have_requested_to_reset_your_password: {
    en: 'You have requested to reset your password',
    es: 'Ha solicitado restablecer su contraseña'
  },
  you_must_be_at_least_18_years_old: {
    en: 'You must be at least 18 years old',
    es: 'Usted debe tener al menos 18 años'
  },
  your_account: {
    en: 'Your Account',
    es: 'Tu cuenta'
  },
  years: {
    en: 'Years',
    es: 'Años'
  },
  yes: {
    en: 'Yes',
    es: 'Si'
  },
  zip_code: {
    en: 'Zip code',
    es: 'Código postal'
  }
})

export default LOCAL_STRINGS
