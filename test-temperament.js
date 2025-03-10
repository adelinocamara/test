/**
 * Temperamento Test - Script principal
 */

document.addEventListener('DOMContentLoaded', function() {
   // Constantes
   const QUESTIONS_PER_PAGE = 5; // Mostrar 5 preguntas por página
  
   // Variables para controlar la paginación
   let currentStrengthsPage = 1;
   let currentWeaknessesPage = 1;

  // Datos del test
  const strengthsQuestions = [
    {
      number: 1,
      options: [
        { letter: 'a', text: 'Animado' },
        { letter: 'b', text: 'Aventurero' },
        { letter: 'c', text: 'Analítico' },
        { letter: 'd', text: 'Adaptable' }
      ]
    },
    {
      number: 2,
      options: [
        { letter: 'a', text: 'Juguetón' },
        { letter: 'b', text: 'Persuasivo' },
        { letter: 'c', text: 'Persistente' },
        { letter: 'd', text: 'Plácido' }
      ]
    },
    // ... mantener todas las demás preguntas
  ];

  const weaknessesQuestions = [
    {
      number: 21,
      options: [
        { letter: 'a', text: 'Estridente' },
        { letter: 'b', text: 'Mandón' },
        { letter: 'c', text: 'Vergonzoso' },
        { letter: 'd', text: 'Soso' }
      ]
    },
    {
      number: 22,
      options: [
        { letter: 'a', text: 'Indisciplinado' },
        { letter: 'b', text: 'Antipático' },
        { letter: 'c', text: 'Implacable' },
        { letter: 'd', text: 'Sin entusiasmo' }
      ]
    },
    // ... mantener todas las demás preguntas
  ];

  // Información de temperamentos
  const temperamentInfo = {
    // ... mantener toda la información de temperamentos
  };

  // Combinaciones más comunes
  const temperamentCombinations = {
    // ... mantener todas las combinaciones
  };

  function initStrengthsPagination() {
    // Obtenemos los contenedores
    const strengthsContainer = document.getElementById('strengths-questions');
    const strengthsPages = document.getElementById('strengths-pages');
    
    // Verificamos si las preguntas de fortalezas se han generado
    if (strengthsContainer && strengthsContainer.children.length > 0) {
      const questions = Array.from(strengthsContainer.children);
      const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);
      
      // Actualizamos el indicador de páginas totales
      document.getElementById('strengths-total-pages').textContent = totalPages;
      
      // Creamos las páginas
      for (let i = 0; i < totalPages; i++) {
        const page = document.createElement('div');
        page.className = 'page' + (i === 0 ? ' active' : '');
        page.id = 'strengths-page-' + (i + 1);
        
        // Agregamos las preguntas a esta página
        for (let j = i * QUESTIONS_PER_PAGE; j < (i + 1) * QUESTIONS_PER_PAGE && j < questions.length; j++) {
          page.appendChild(questions[j].cloneNode(true));
        }
        
        strengthsPages.appendChild(page);
      }
      
      // Reemplazamos las preguntas originales con las páginas
      strengthsContainer.innerHTML = '';
      strengthsContainer.appendChild(strengthsPages);
      
      // Configuramos los controladores de eventos para los botones de paginación
      document.getElementById('strengths-prev-page').addEventListener('click', prevStrengthsPage);
      document.getElementById('strengths-next-page').addEventListener('click', nextStrengthsPage);
    }
  }
  
  // Función para avanzar a la siguiente página de fortalezas
  function nextStrengthsPage() {
    const totalPages = parseInt(document.getElementById('strengths-total-pages').textContent);
    if (currentStrengthsPage < totalPages) {
      // Ocultamos la página actual
      document.getElementById('strengths-page-' + currentStrengthsPage).classList.remove('active');
      // Avanzamos a la siguiente página
      currentStrengthsPage++;
      // Mostramos la nueva página actual
      document.getElementById('strengths-page-' + currentStrengthsPage).classList.add('active');
      // Actualizamos el indicador de página actual
      document.getElementById('strengths-current-page').textContent = currentStrengthsPage;
      
      // Actualizamos el estado de los botones
      document.getElementById('strengths-prev-page').disabled = false;
      document.getElementById('strengths-next-page').disabled = currentStrengthsPage === totalPages;
    }
  }
  
  // Función para regresar a la página anterior de fortalezas
  function prevStrengthsPage() {
    if (currentStrengthsPage > 1) {
      // Ocultamos la página actual
      document.getElementById('strengths-page-' + currentStrengthsPage).classList.remove('active');
      // Retrocedemos a la página anterior
      currentStrengthsPage--;
      // Mostramos la nueva página actual
      document.getElementById('strengths-page-' + currentStrengthsPage).classList.add('active');
      // Actualizamos el indicador de página actual
      document.getElementById('strengths-current-page').textContent = currentStrengthsPage;
      
      // Actualizamos el estado de los botones
      document.getElementById('strengths-prev-page').disabled = currentStrengthsPage === 1;
      document.getElementById('strengths-next-page').disabled = false;
    }
  }
  
  // Función para inicializar la paginación de debilidades (similar a fortalezas)
  function initWeaknessesPagination() {
    const weaknessesContainer = document.getElementById('weaknesses-questions');
    const weaknessesPages = document.getElementById('weaknesses-pages');
    
    if (weaknessesContainer && weaknessesContainer.children.length > 0) {
      const questions = Array.from(weaknessesContainer.children);
      const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);
      
      document.getElementById('weaknesses-total-pages').textContent = totalPages;
      
      for (let i = 0; i < totalPages; i++) {
        const page = document.createElement('div');
        page.className = 'page' + (i === 0 ? ' active' : '');
        page.id = 'weaknesses-page-' + (i + 1);
        
        for (let j = i * QUESTIONS_PER_PAGE; j < (i + 1) * QUESTIONS_PER_PAGE && j < questions.length; j++) {
          page.appendChild(questions[j].cloneNode(true));
        }
        
        weaknessesPages.appendChild(page);
      }
      
      weaknessesContainer.innerHTML = '';
      weaknessesContainer.appendChild(weaknessesPages);
      
      document.getElementById('weaknesses-prev-page').addEventListener('click', prevWeaknessesPage);
      document.getElementById('weaknesses-next-page').addEventListener('click', nextWeaknessesPage);
    }
  }
  
  // Función para avanzar a la siguiente página de debilidades
  function nextWeaknessesPage() {
    const totalPages = parseInt(document.getElementById('weaknesses-total-pages').textContent);
    if (currentWeaknessesPage < totalPages) {
      document.getElementById('weaknesses-page-' + currentWeaknessesPage).classList.remove('active');
      currentWeaknessesPage++;
      document.getElementById('weaknesses-page-' + currentWeaknessesPage).classList.add('active');
      document.getElementById('weaknesses-current-page').textContent = currentWeaknessesPage;
      
      document.getElementById('weaknesses-prev-page').disabled = false;
      document.getElementById('weaknesses-next-page').disabled = currentWeaknessesPage === totalPages;
    }
  }
  
  // Función para regresar a la página anterior de debilidades
  function prevWeaknessesPage() {
    if (currentWeaknessesPage > 1) {
      document.getElementById('weaknesses-page-' + currentWeaknessesPage).classList.remove('active');
      currentWeaknessesPage--;
      document.getElementById('weaknesses-page-' + currentWeaknessesPage).classList.add('active');
      document.getElementById('weaknesses-current-page').textContent = currentWeaknessesPage;
      
      document.getElementById('weaknesses-prev-page').disabled = currentWeaknessesPage === 1;
      document.getElementById('weaknesses-next-page').disabled = false;
    }
  }
  
  // Inicialización de la paginación
  // Debes llamar a estas funciones después de que las preguntas se generen en el DOM
  // Por ejemplo, en tu código existente donde generas las preguntas, agrega estas líneas al final:
  
  // IMPORTANTE: Necesitas integrar estas llamadas de función en tu código existente
  // Si tienes una función que genera las preguntas, llama a estas funciones después de generarlas
  
  // En este ejemplo, asumimos que ya existe una función como esta:
  function renderQuestionsAndInitializePagination() {
    // Tu código existente para generar preguntas...
    
    // Después de generar las preguntas, inicializa la paginación:
    initStrengthsPagination();
    initWeaknessesPagination();
  }
  
  // Si ya tienes un evento o función que se ejecuta después de generar las preguntas,
  // agrega las llamadas a initStrengthsPagination() y initWeaknessesPagination() allí.
  // Elementos DOM
  let stepper = document.querySelector('.bs-stepper');
  let strengthsContainer = document.getElementById('strengths-questions');
  let weaknessesContainer = document.getElementById('weaknesses-questions');
  let strengthCount = document.getElementById('strength-count');
  let weaknessCount = document.getElementById('weakness-count');
  let strengthProgress = document.getElementById('strength-progress');
  let weaknessProgress = document.getElementById('weakness-progress');
  let btnCalculate = document.getElementById('btn-calculate');
  let btnRestart = document.getElementById('btn-restart');
  let btnSave = document.getElementById('btn-save');
  
  // Variables para el seguimiento de respuestas
  let selectedOptions = new Map();
  let resultsCalculated = false;
  
  // Inicializar el stepper
  let stepperEl = null;
  if (stepper) {
    stepperEl = new window.Stepper(stepper, {
      linear: false,
      animation: true
    });
    
    console.log('Stepper inicializado:', stepperEl);
    console.log('Paso actual:', stepperEl._currentIndex);
    console.log('Pasos:', document.querySelectorAll('.bs-stepper .step').length);
    console.log('Contenidos:', document.querySelectorAll('.bs-stepper-content .content').length);

    // Verificar si las clases CSS están funcionando correctamente
    stepper.addEventListener('show.bs-stepper', function (event) {
      console.log('Mostrando paso:', event.detail.indexStep);
    });
    stepper.addEventListener('shown.bs-stepper', function (event) {
      console.log('Paso mostrado:', event.detail.indexStep);
    });
  } else {
    console.error('No se encontró el elemento stepper');
  }
  
  // Función para manejar el cálculo de resultados
  function calculateHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('Botón calcular presionado');
    
    // Verificar si todas las preguntas están respondidas
    if (selectedOptions.size < 40) {
      const missing = 40 - selectedOptions.size;
      showError(`Debes responder todas las preguntas. Faltan ${missing} respuestas.`);
      return false;
    }
    
    // Contar respuestas manualmente
    let countA = 0, countB = 0, countC = 0, countD = 0;
    
    for (const letter of selectedOptions.values()) {
      switch (letter) {
        case 'a': countA++; break;
        case 'b': countB++; break;
        case 'c': countC++; break;
        case 'd': countD++; break;
      }
    }
    
    console.log('Conteo final:', { countA, countB, countC, countD });
    
    // Guardar resultados en campos ocultos
    document.getElementById('hid_result_a').value = countA;
    document.getElementById('hid_result_b').value = countB;
    document.getElementById('hid_result_c').value = countC;
    document.getElementById('hid_result_d').value = countD;
    
    // Actualizar la interfaz de resultados
    updateResults(countA, countB, countC, countD);
    
    // Marcar como calculado
    resultsCalculated = true;
    
    // USAR EL API OFICIAL DEL STEPPER PARA NAVEGAR - MÁS COMPATIBLE
    console.log('Navegando al paso de resultados');
    
    // Método directo de navegación
    setTimeout(function() {
      stepperEl.to(3);  // Ir directamente al paso de resultados (índice 3)
      console.log('Navegación completada');
      
      // Segunda actualización para asegurar que los datos se muestren
      setTimeout(function() {
        updateResults(countA, countB, countC, countD);
      }, 200);
    }, 100);
    
    return false;
  }
  
  // Inicializar el test
  function initTest() {
    console.log('Iniciando el test');
    
    // Verificar que los contenedores existan
    if (!strengthsContainer || !weaknessesContainer) {
      console.error('Contenedores de preguntas no encontrados');
      return;
    }
    
    // Limpiar contenedores
    strengthsContainer.innerHTML = '';
    weaknessesContainer.innerHTML = '';
    selectedOptions.clear();
    resultsCalculated = false;
    
    // Añadir log para verificar datos
    console.log('Generando preguntas de fortalezas:', strengthsQuestions.length);
    console.log('Generando preguntas de debilidades:', weaknessesQuestions.length);
    
    // Generar preguntas de fortalezas
    generateQuestions(strengthsQuestions, strengthsContainer);
    
    // Generar preguntas de debilidades
    generateQuestions(weaknessesQuestions, weaknessesContainer);
    
    // Reiniciar contadores
    updateCounts();
    updateResults(0, 0, 0, 0);
    
    // Establecer manejadores de eventos
    setEventHandlers();
  }
  
  // Generar preguntas
  function generateQuestions(questions, container) {
    console.log('Generando preguntas en container:', container);
    if (!container) {
      console.error('Contenedor no válido');
      return;
    }
    
    questions.forEach(question => {
      const questionCard = document.createElement('div');
      questionCard.className = 'question-card';
      questionCard.id = `question-${question.number}`;
      
      const questionTitle = document.createElement('h6');
      questionTitle.className = 'question-title';
      questionTitle.textContent = `${question.number}. Selecciona una opción:`;
      
      const optionRow = document.createElement('div');
      optionRow.className = 'option-row';
      
      question.options.forEach(option => {
        const optionCard = document.createElement('div');
        optionCard.className = 'option-card';
        optionCard.dataset.question = question.number;
        optionCard.dataset.letter = option.letter;
        
        const optionCheck = document.createElement('span');
        optionCheck.className = 'option-check';
        
        const optionLabel = document.createElement('span');
        optionLabel.className = 'option-label';
        optionLabel.textContent = option.text;
        
        optionCard.appendChild(optionCheck);
        optionCard.appendChild(optionLabel);
        optionRow.appendChild(optionCard);
        
        // Evento de clic para seleccionar opción
        optionCard.addEventListener('click', () => selectOption(question.number, option.letter));
      });
      
      questionCard.appendChild(questionTitle);
      questionCard.appendChild(optionRow);
      container.appendChild(questionCard);
    });
    
    console.log(`Generadas ${questions.length} preguntas`);
  }
  
  // Seleccionar una opción
  function selectOption(questionNumber, letter) {
    // Deseleccionar opciones previas para esta pregunta
    const options = document.querySelectorAll(`.option-card[data-question="${questionNumber}"]`);
    options.forEach(option => {
      option.classList.remove('selected');
    });
    
    // Seleccionar la nueva opción
    const selectedOption = document.querySelector(`.option-card[data-question="${questionNumber}"][data-letter="${letter}"]`);
    if (selectedOption) {
      selectedOption.classList.add('selected');
    }
    
    // Guardar la selección
    selectedOptions.set(parseInt(questionNumber), letter);
    
    // Actualizar contadores
    updateCounts();
  }
  
  // Actualizar contadores
  function updateCounts() {
    if (!strengthCount || !weaknessCount) {
      console.error('Elementos de contador no encontrados');
      return;
    }
    
    // Contar fortalezas contestadas (1-20)
    let answeredStrengths = 0;
    for (let i = 1; i <= 20; i++) {
      if (selectedOptions.has(i)) {
        answeredStrengths++;
      }
    }
    
    // Contar debilidades contestadas (21-40)
    let answeredWeaknesses = 0;
    for (let i = 21; i <= 40; i++) {
      if (selectedOptions.has(i)) {
        answeredWeaknesses++;
      }
    }
    
    // Actualizar contadores y barras de progreso
    strengthCount.textContent = answeredStrengths;
    if (strengthProgress) {
      strengthProgress.style.width = `${(answeredStrengths / 20) * 100}%`;
    }
    
    weaknessCount.textContent = answeredWeaknesses;
    if (weaknessProgress) {
      weaknessProgress.style.width = `${(answeredWeaknesses / 20) * 100}%`;
    }
  }
  
  // Actualizar la interfaz de resultados
  function updateResults(countA, countB, countC, countD) {
    console.log('Actualizando resultados:', { countA, countB, countC, countD });
    
    // Verificar que los elementos existan
    const resultADisplay = document.getElementById('result-a-display');
    const resultBDisplay = document.getElementById('result-b-display');
    const resultCDisplay = document.getElementById('result-c-display');
    const resultDDisplay = document.getElementById('result-d-display');
    
    if (!resultADisplay || !resultBDisplay || !resultCDisplay || !resultDDisplay) {
      console.error('Elementos de visualización de resultados no encontrados');
      return;
    }
    
    // Actualizar los contadores
    resultADisplay.textContent = countA;
    resultBDisplay.textContent = countB;
    resultCDisplay.textContent = countC;
    resultDDisplay.textContent = countD;
    
    // Obtener referencias a las barras de progreso
    const sanguineBar = document.getElementById('sanguine-bar');
    const cholericBar = document.getElementById('choleric-bar');
    const melancholicBar = document.getElementById('melancholic-bar');
    const phlegmaticBar = document.getElementById('phlegmatic-bar');
    
    if (!sanguineBar || !cholericBar || !melancholicBar || !phlegmaticBar) {
      console.error('Barras de progreso no encontradas');
      return;
    }
    
    // Calcular porcentajes para las barras de progreso
    const total = countA + countB + countC + countD;
    if (total === 0) {
      // Si no hay respuestas, limpiar la interfaz
      sanguineBar.style.width = '0%';
      cholericBar.style.width = '0%';
      melancholicBar.style.width = '0%';
      phlegmaticBar.style.width = '0%';
      
      const primaryTemperament = document.getElementById('primary-temperament');
      const secondaryTemperament = document.getElementById('secondary-temperament');
      const temperamentDescription = document.getElementById('temperament-description');
      
      if (primaryTemperament) primaryTemperament.textContent = '-';
      if (secondaryTemperament) secondaryTemperament.textContent = '-';
      if (temperamentDescription) temperamentDescription.innerHTML = '';
      return;
    }
    
    const percentA = (countA / total) * 100;
    const percentB = (countB / total) * 100;
    const percentC = (countC / total) * 100;
    const percentD = (countD / total) * 100;
    
    console.log('Porcentajes calculados:', { percentA, percentB, percentC, percentD });
    
    // Actualizar barras de progreso
    sanguineBar.style.width = `${percentA}%`;
    cholericBar.style.width = `${percentB}%`;
    melancholicBar.style.width = `${percentC}%`;
    phlegmaticBar.style.width = `${percentD}%`;
    
    // Determinar temperamentos dominante y secundario
    const scores = [
      { type: 'sanguineo', count: countA },
      { type: 'colerico', count: countB },
      { type: 'melancolico', count: countC },
      { type: 'flematico', count: countD }
    ];
    
    // Ordenar por puntuación (de mayor a menor)
    scores.sort((a, b) => b.count - a.count);
    
    console.log('Scores ordenados:', scores);
    
    // Mostrar temperamentos dominante y secundario
    const primary = scores[0].type;
    const secondary = scores[1].type;
    
    console.log('Temperamentos determinados:', { primary, secondary });
    
    const primaryTemperament = document.getElementById('primary-temperament');
    const secondaryTemperament = document.getElementById('secondary-temperament');
    
    if (primaryTemperament && secondaryTemperament) {
      primaryTemperament.textContent = temperamentInfo[primary].name;
      secondaryTemperament.textContent = temperamentInfo[secondary].name;
    }
    
    // Mostrar descripción de la combinación de temperamentos
    const combinationKey = `${primary}-${secondary}`;
    const descriptionElement = document.getElementById('temperament-description');
    
    if (descriptionElement) {
      let description = '';
      
      // Descripción del temperamento primario
      description += `<p><strong>${temperamentInfo[primary].name} (Dominante):</strong> ${temperamentInfo[primary].description}</p>`;
      
      // Descripción del temperamento secundario
      description += `<p><strong>${temperamentInfo[secondary].name} (Secundario):</strong> ${temperamentInfo[secondary].description}</p>`;
      
      // Descripción de la combinación
      if (temperamentCombinations[combinationKey]) {
        description += `<p><strong>Tu combinación ${temperamentInfo[primary].name}-${temperamentInfo[secondary].name}:</strong> ${temperamentCombinations[combinationKey]}</p>`;
      }
      
      // Fortalezas y debilidades
      description += `<p><strong>Tus principales fortalezas:</strong> ${temperamentInfo[primary].strengths}</p>`;
      description += `<p><strong>Aspectos a trabajar:</strong> ${temperamentInfo[primary].weaknesses}</p>`;
      
      descriptionElement.innerHTML = description;
      console.log('Descripción actualizada');
    }
  }
  
  // Mostrar mensaje de error
  function showError(message) {
    if (typeof Swal !== 'undefined') {
      Swal.fire({
        title: 'Atención',
        text: message,
        icon: 'warning',
        confirmButtonText: 'Entendido'
      });
    } else {
      alert(message);
    }
  }
  
  // Configurar eventos
  function setEventHandlers() {
    if (!btnCalculate) {
      console.error('Botón de cálculo no encontrado');
      return;
    }
    
    // IMPORTANTE: Limpiar todos los listeners existentes
    const newBtnCalculate = btnCalculate.cloneNode(true);
    btnCalculate.parentNode.replaceChild(newBtnCalculate, btnCalculate);
    
    // Actualizar la referencia
    btnCalculate = document.getElementById('btn-calculate');
    
    // Agregar único manejador de eventos
    btnCalculate.addEventListener('click', calculateHandler);
    
    // Botón para reiniciar el test
    if (btnRestart) {
      btnRestart.addEventListener('click', () => {
        // Confirmar reinicio
        if (typeof Swal !== 'undefined') {
          Swal.fire({
            title: '¿Reiniciar test?',
            text: 'Perderás todas tus respuestas actuales.',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, reiniciar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
              initTest();
              if (stepperEl) stepperEl.to(0); // Volver al primer paso
            }
          });
        } else {
          if (confirm('¿Reiniciar test? Perderás todas tus respuestas actuales.')) {
            initTest();
            if (stepperEl) stepperEl.to(0);
          }
        }
      });
    }
    
    // Botón para guardar resultados
    if (btnSave) {
      btnSave.addEventListener('click', () => {
        if (resultsCalculated) {
          // Crear objeto con los resultados
          const results = {
            sanguineo: parseInt(document.getElementById('hid_result_a').value),
            colerico: parseInt(document.getElementById('hid_result_b').value),
            melancolico: parseInt(document.getElementById('hid_result_c').value),
            flematico: parseInt(document.getElementById('hid_result_d').value)
          };
          
          // Enviar al servidor
          fetch('/profile/save-temperament-results', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(results)
          })
          .then(response => response.json())
          .then(data => {
            if (data.success) {
              showSuccess('Tus resultados se han guardado correctamente.');
            } else {
              showError('No se pudieron guardar los resultados. Inténtalo de nuevo.');
            }
          })
          .catch(error => {
            console.error('Error al guardar resultados:', error);
            showError('Hubo un problema al intentar guardar los resultados.');
          });
        }
      });
    }
    
    // Botones de navegación del stepper
    document.querySelectorAll('.btn-nxt').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevenir comportamiento predeterminado
        console.log('Botón siguiente presionado');
        
        if (stepperEl) {
          // Obtener el paso actual
          const currentStep = stepperEl._currentIndex;
          console.log('Paso actual:', currentStep);
          
          // Avanzar al siguiente paso
          setTimeout(function() {
            stepperEl.next();
          }, 100);
        }
      });
    });
    
    document.querySelectorAll('.btn-prev').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevenir comportamiento predeterminado
        if (stepperEl) stepperEl.previous();
      });
    });
  }
  
  // Función para mensajes de éxito
  function showSuccess(message) {
    if (typeof Swal !== 'undefined') {
      Swal.fire({
        title: '¡Guardado!',
        text: message,
        icon: 'success',
        confirmButtonText: 'Continuar'
      });
    } else {
      alert(message);
    }
  }

  // Interceptar envío de formulario
  const frmMain = document.getElementById('frmMain');
  if (frmMain) {
    frmMain.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log('Envío de formulario interceptado y prevenido');
      return false;
    });
  }
  
  // Iniciar el test cuando el documento esté listo
  console.log('Documento cargado, preparándose para iniciar el test');
  window.addEventListener('load', function() {
    console.log('Ventana completamente cargada');
    initTest();
  });
  
  // También iniciar directamente (cinturón y tirantes)
  initTest();
});