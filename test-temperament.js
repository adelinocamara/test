/**
 * Temperamento Test - Script corregido
 */

document.addEventListener('DOMContentLoaded', function() {
  // Buscar el botón "Siguiente" en la primera pantalla y cambiar su texto
  const firstNextButton = document.querySelector('#instructions-step .btn-nxt');
  if (firstNextButton) {
    firstNextButton.textContent = 'Iniciar Test';
  }
  
  // Ocultar el botón "Anterior" en la primera pantalla (por si existe)
  const firstPrevButton = document.querySelector('#instructions-step .btn-prev');
  if (firstPrevButton) {
    firstPrevButton.style.display = 'none';
  }
  
  // Constantes
  const QUESTIONS_PER_PAGE = 20; // Mostrar todas las preguntas en una sola página
  
  // Datos del test (solo 2 ejemplos)
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
    {
      number: 3,
      options: [
        { letter: 'a', text: 'Sociable' },
        { letter: 'b', text: 'Decidido' },
        { letter: 'c', text: 'Abnegado' },
        { letter: 'd', text: 'Sumiso' }
      ]
    },
    {
      number: 4,
      options: [
        { letter: 'a', text: 'Convincente' },
        { letter: 'b', text: 'Competitivo' },
        { letter: 'c', text: 'Considerado' },
        { letter: 'd', text: 'Controlado' }
      ]
    },
    {
      number: 5,
      options: [
        { letter: 'a', text: 'Estimulante' },
        { letter: 'b', text: 'Inventivo' },
        { letter: 'c', text: 'Respetuoso' },
        { letter: 'd', text: 'Reservado' }
      ]
    },
    {
      number: 6,
      options: [
        { letter: 'a', text: 'Vivaz' },
        { letter: 'b', text: 'Autosuficiente' },
        { letter: 'c', text: 'Sensible' },
        { letter: 'd', text: 'Contento' }
      ]
    },
    {
      number: 7,
      options: [
        { letter: 'a', text: 'Promotor' },
        { letter: 'b', text: 'Positivo' },
        { letter: 'c', text: 'Planificador' },
        { letter: 'd', text: 'Paciente' }
      ]
    },
    {
      number: 8,
      options: [
        { letter: 'a', text: 'Espontáneo' },
        { letter: 'b', text: 'Seguro' },
        { letter: 'c', text: 'Sigue un horario' },
        { letter: 'd', text: 'Tímido' }
      ]
    },
    {
      number: 9,
      options: [
        { letter: 'a', text: 'Optimista' },
        { letter: 'b', text: 'Franco' },
        { letter: 'c', text: 'Ordenado' },
        { letter: 'd', text: 'Complaciente' }
      ]
    },
    {
      number: 10,
      options: [
        { letter: 'a', text: 'Humorístico' },
        { letter: 'b', text: 'Dominante' },
        { letter: 'c', text: 'Fiel' },
        { letter: 'd', text: 'Amigable' }
      ]
    },
    {
      number: 11,
      options: [
        { letter: 'a', text: 'Encantador' },
        { letter: 'b', text: 'Osado' },
        { letter: 'c', text: 'Detallista' },
        { letter: 'd', text: 'Diplomático' }
      ]
    },
    {
      number: 12,
      options: [
        { letter: 'a', text: 'Alegre' },
        { letter: 'b', text: 'Confiado' },
        { letter: 'c', text: 'Culto' },
        { letter: 'd', text: 'Constante' }
      ]
    },
    {
      number: 13,
      options: [
        { letter: 'a', text: 'Inspirador' },
        { letter: 'b', text: 'Independiente' },
        { letter: 'c', text: 'Idealista' },
        { letter: 'd', text: 'Inofensivo' }
      ]
    },
    {
      number: 14,
      options: [
        { letter: 'a', text: 'Cálido' },
        { letter: 'b', text: 'Decisivo' },
        { letter: 'c', text: 'Introspectivo' },
        { letter: 'd', text: 'Humor seco' }
      ]
    },
    {
      number: 15,
      options: [
        { letter: 'a', text: 'Tratable' },
        { letter: 'b', text: 'Instigador' },
        { letter: 'c', text: 'Músico' },
        { letter: 'd', text: 'Conciliador' }
      ]
    },
    {
      number: 16,
      options: [
        { letter: 'a', text: 'Conversador' },
        { letter: 'b', text: 'Tenaz' },
        { letter: 'c', text: 'Considerado' },
        { letter: 'd', text: 'Tolerante' }
      ]
    },
    {
      number: 17,
      options: [
        { letter: 'a', text: 'Enérgico' },
        { letter: 'b', text: 'Líder' },
        { letter: 'c', text: 'Leal' },
        { letter: 'd', text: 'Escucha' }
      ]
    },
    {
      number: 18,
      options: [
        { letter: 'a', text: 'Adorable' },
        { letter: 'b', text: 'Jefe' },
        { letter: 'c', text: 'Crea gráficas' },
        { letter: 'd', text: 'Contento' }
      ]
    },
    {
      number: 19,
      options: [
        { letter: 'a', text: 'Popular' },
        { letter: 'b', text: 'Productivo' },
        { letter: 'c', text: 'Perfeccionista' },
        { letter: 'd', text: 'Permisivo' }
      ]
    },
    {
      number: 20,
      options: [
        { letter: 'a', text: 'Jovial' },
        { letter: 'b', text: 'Atrevido' },
        { letter: 'c', text: 'Se comporta bien' },
        { letter: 'd', text: 'Equilibrado' }
      ]
    }
  ];

  // Preguntas de debilidades (solo 2 ejemplos)
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
    {
      number: 23,
      options: [
        { letter: 'a', text: 'Repetidor' },
        { letter: 'b', text: 'Resistente' },
        { letter: 'c', text: 'Resentido' },
        { letter: 'd', text: 'Reticente' }
      ]
    },
    {
      number: 24,
      options: [
        { letter: 'a', text: 'Olvidadizo' },
        { letter: 'b', text: 'Cortante' },
        { letter: 'c', text: 'Exigente' },
        { letter: 'd', text: 'Temeroso' }
      ]
    },
    {
      number: 25,
      options: [
        { letter: 'a', text: 'Interrumpe' },
        { letter: 'b', text: 'Impaciente' },
        { letter: 'c', text: 'Inseguro' },
        { letter: 'd', text: 'Indeciso' }
      ]
    },
    {
      number: 26,
      options: [
        { letter: 'a', text: 'Imprevisible' },
        { letter: 'b', text: 'Frío' },
        { letter: 'c', text: 'Impopular' },
        { letter: 'd', text: 'No comprometido' }
      ]
    },
    {
      number: 27,
      options: [
        { letter: 'a', text: 'Descuidado' },
        { letter: 'b', text: 'Terco' },
        { letter: 'c', text: 'Difícil contentar' },
        { letter: 'd', text: 'Vacilante' }
      ]
    },
    {
      number: 28,
      options: [
        { letter: 'a', text: 'Permisivo' },
        { letter: 'b', text: 'Orgulloso' },
        { letter: 'c', text: 'Pesimista' },
        { letter: 'd', text: 'Insípido' }
      ]
    },
    {
      number: 29,
      options: [
        { letter: 'a', text: 'Iracundo' },
        { letter: 'b', text: 'Argumentador' },
        { letter: 'c', text: 'Taciturno' },
        { letter: 'd', text: 'Sin objetivos' }
      ]
    },
    {
      number: 30,
      options: [
        { letter: 'a', text: 'Ingenuo' },
        { letter: 'b', text: 'Atrevido' },
        { letter: 'c', text: 'Negativo' },
        { letter: 'd', text: 'Despreocupado' }
      ]
    },
    {
      number: 31,
      options: [
        { letter: 'a', text: 'Quiere el crédito' },
        { letter: 'b', text: 'Adicto al trabajo' },
        { letter: 'c', text: 'Retraído' },
        { letter: 'd', text: 'Ansioso' }
      ]
    },
    {
      number: 32,
      options: [
        { letter: 'a', text: 'Hablador' },
        { letter: 'b', text: 'Indiscreto' },
        { letter: 'c', text: 'Susceptible' },
        { letter: 'd', text: 'Tímido' }
      ]
    },
    {
      number: 33,
      options: [
        { letter: 'a', text: 'Desorganizado' },
        { letter: 'b', text: 'Dominante' },
        { letter: 'c', text: 'Deprimido' },
        { letter: 'd', text: 'Dudoso' }
      ]
    },
    {
      number: 34,
      options: [
        { letter: 'a', text: 'Inconsistente' },
        { letter: 'b', text: 'Intolerante' },
        { letter: 'c', text: 'Introvertido' },
        { letter: 'd', text: 'Indiferente' }
      ]
    },
    {
      number: 35,
      options: [
        { letter: 'a', text: 'Desordenado' },
        { letter: 'b', text: 'Manipulador' },
        { letter: 'c', text: 'Desanimado' },
        { letter: 'd', text: 'Masculla' }
      ]
    },
    {
      number: 36,
      options: [
        { letter: 'a', text: 'Ostentoso' },
        { letter: 'b', text: 'Testarudo' },
        { letter: 'c', text: 'Escéptico' },
        { letter: 'd', text: 'Lento' }
      ]
    },
    {
      number: 37,
      options: [
        { letter: 'a', text: 'Ruidoso' },
        { letter: 'b', text: 'Prepotente' },
        { letter: 'c', text: 'Solitario' },
        { letter: 'd', text: 'Flojo' }
      ]
    },
    {
      number: 38,
      options: [
        { letter: 'a', text: 'Atolondrado' },
        { letter: 'b', text: 'Malgeniado' },
        { letter: 'c', text: 'Suspicaz' },
        { letter: 'd', text: 'Perezoso' }
      ]
    },
    {
      number: 39,
      options: [
        { letter: 'a', text: 'Inquieto' },
        { letter: 'b', text: 'Precipitado' },
        { letter: 'c', text: 'Vengativo' },
        { letter: 'd', text: 'Poca voluntad' }
      ]
    },
    {
      number: 40,
      options: [
        { letter: 'a', text: 'Variable' },
        { letter: 'b', text: 'Astuto' },
        { letter: 'c', text: 'Crítico' },
        { letter: 'd', text: 'Comprometedor' }
      ]
    }
  ];
  // Información de temperamentos - AÑADIDO
  const temperamentInfo = {
    sanguineo: {
      name: 'Sanguíneo',
      description: 'El temperamento sanguíneo se caracteriza por ser extrovertido, sociable, hablador y entusiasta. Son personas alegres, optimistas, que disfrutan de la vida social y les encanta estar rodeados de gente.',
      strengths: 'Carisma, entusiasmo, creatividad, capacidad para inspirar a otros, facilidad para hacer amigos, optimismo y alegría natural.',
      weaknesses: 'Desorganización, falta de disciplina, tendencia a hablar demasiado, dificultad para concentrarse y terminar proyectos, búsqueda constante de atención.'
    },
    colerico: {
      name: 'Colérico',
      description: 'El temperamento colérico es dinámico, activo, práctico, independiente y decidido. Son líderes naturales, orientados a metas, que disfrutan los desafíos y toman decisiones rápidamente.',
      strengths: 'Liderazgo, determinación, productividad, capacidad para tomar decisiones, autosuficiencia, orientación a resultados y visión clara.',
      weaknesses: 'Impaciencia, terquedad, tendencia a dominar a otros, intolerancia, dificultad para mostrar emociones, propensión a la ira cuando se les contradice.'
    },
    melancolico: {
      name: 'Melancólico',
      description: 'El temperamento melancólico es analítico, profundo, perfeccionista y detallista. Son personas reflexivas, ordenadas, fieles, con gran capacidad para el pensamiento abstracto y la creatividad artística.',
      strengths: 'Atención al detalle, perfeccionismo, lealtad, profundidad emocional e intelectual, sensibilidad, alta capacidad analítica y creativa.',
      weaknesses: 'Tendencia a la depresión, autocrítica excesiva, indecisión por miedo a equivocarse, pesimismo, expectativas demasiado altas de sí mismo y de los demás.'
    },
    flematico: {
      name: 'Flemático',
      description: 'El temperamento flemático es tranquilo, sereno, paciente y equilibrado. Son personas pacíficas, adaptables, diplomáticas, que evitan los conflictos y mantienen la calma en situaciones de crisis.',
      strengths: 'Paciencia, diplomacia, estabilidad emocional, confiabilidad, habilidad para mediar en conflictos, capacidad para escuchar y mantener relaciones armoniosas.',
      weaknesses: 'Resistencia al cambio, indecisión, procrastinación, falta de iniciativa, tendencia a evitar confrontaciones necesarias, conformismo.'
    }
  };
  // Combinaciones más comunes - AÑADIDO
  const temperamentCombinations = {
    'sanguineo-colerico': 'Combinas la sociabilidad y el entusiasmo del sanguíneo con la determinación y orientación a metas del colérico. Eres muy extrovertido, dinámico y persuasivo, con gran capacidad para inspirar a otros y liderar proyectos. Puedes ser impulsivo y necesitas trabajar en la constancia y la paciencia.',
    'sanguineo-melancolico': 'Mezclas la alegría y sociabilidad del sanguíneo con la profundidad y sensibilidad del melancólico. Eres creativo, expresivo emocionalmente y perceptivo. Tienes facilidad para conectar con la gente pero también necesitas tiempo a solas para reflexionar. Tu desafío es equilibrar la impulsividad con la planificación.',
    'sanguineo-flematico': 'Combinas el entusiasmo del sanguíneo con la estabilidad del flemático. Eres sociable pero con un lado tranquilo que te ayuda a ser más equilibrado. Te adaptas bien a diferentes situaciones sociales y eres diplomático. Necesitas trabajar en la organización y la constancia en tus proyectos.',
    'colerico-sanguineo': 'Mezclas el liderazgo del colérico con el carisma del sanguíneo. Tienes una personalidad dinámica, persuasiva y motivadora. Eres buen comunicador y tienes facilidad para inspirar a otros hacia tus objetivos. Necesitas controlar la impaciencia y la tendencia a dominar conversaciones.',
    'colerico-melancolico': 'Combinas la determinación del colérico con la profundidad del melancólico. Eres decidido, orientado a metas y muy analítico. Tienes altos estándares para ti mismo y los demás. Tus desafíos incluyen gestionar el perfeccionismo y la impaciencia cuando las cosas no salen como las planeas.',
    'colerico-flematico': 'Mezclas la orientación a resultados del colérico con la estabilidad del flemático. Eres un líder equilibrado, que puede tomar decisiones rápidas pero con cierta cautela. Tienes habilidad para mantener la calma bajo presión mientras sigues siendo productivo. Debes trabajar en escuchar más a los demás.',
    'melancolico-sanguineo': 'Combinas la profundidad del melancólico con el entusiasmo del sanguíneo. Eres reflexivo pero con capacidad para expresarte y conectar con otros. Tienes talento artístico y sensibilidad emocional junto con momentos de espontaneidad. Tu reto es no ser demasiado autocrítico ni dejarte llevar por extremos emocionales.',
    'melancolico-colerico': 'Mezclas la precisión del melancólico con la determinación del colérico. Eres perfeccionista, orientado a detalles y muy eficiente. Tienes alta capacidad de análisis y puedes implementar planes con excelencia. Necesitas trabajar en ser más flexible y menos crítico contigo mismo y con los demás.',
    'melancolico-flematico': 'Combinas la profundidad del melancólico con la paciencia del flemático. Eres reflexivo, considerado y muy leal. Tienes gran capacidad para el pensamiento profundo y la planificación detallada. Tu desafío es vencer la tendencia a la indecisión y la procrastinación que puede surgir de esta combinación.',
    'flematico-sanguineo': 'Mezclas la calma del flemático con la sociabilidad del sanguíneo. Eres adaptable, amigable y buen mediador. Tienes un encanto tranquilo que atrae a los demás y te permite construir relaciones estables. Necesitas trabajar en la iniciativa y en expresar más tus opiniones y sentimientos.',
    'flematico-colerico': 'Combinas la estabilidad del flemático con el empuje del colérico. Eres confiable, eficiente y persistente. Tienes capacidad para trabajar consistentemente hacia tus metas sin alterarte. Tu desafío es ser más flexible y entusiasta, además de expresar con más claridad tus deseos y necesidades.',
    'flematico-melancolico': 'Mezclas la paciencia del flemático con la precisión del melancólico. Eres muy observador, fiel, confiable y detallista. Tienes gran capacidad para tareas que requieren concentración prolongada y precisión. Necesitas trabajar en ser más proactivo y menos temeroso ante los cambios y desafíos.'
  };
  // Función modificada para mostrar todas las preguntas en una sola página
  function initStrengthsDisplay() {
    // Obtenemos los contenedores
    const strengthsContainer = document.getElementById('strengths-questions');
    const strengthsPages = document.getElementById('strengths-pages');
    
    // Verificamos si las preguntas de fortalezas se han generado
    if (strengthsContainer && strengthsContainer.children.length > 0) {
      const questions = Array.from(strengthsContainer.children);
      
      // Creamos una única página con todas las preguntas
      const page = document.createElement('div');
      page.className = 'page active';
      page.id = 'strengths-page-1';
      
      // Agregamos todas las preguntas a esta página
      questions.forEach(question => {
        page.appendChild(question.cloneNode(true));
      });
      
      strengthsPages.appendChild(page);
      
      // Reemplazamos las preguntas originales con la página
      strengthsContainer.innerHTML = '';
      strengthsContainer.appendChild(strengthsPages);
    }
  }
  
  // Función modificada para mostrar todas las preguntas de debilidades en una sola página
  function initWeaknessesDisplay() {
    const weaknessesContainer = document.getElementById('weaknesses-questions');
    const weaknessesPages = document.getElementById('weaknesses-pages');
    
    if (weaknessesContainer && weaknessesContainer.children.length > 0) {
      const questions = Array.from(weaknessesContainer.children);
      
      // Creamos una única página con todas las preguntas
      const page = document.createElement('div');
      page.className = 'page active';
      page.id = 'weaknesses-page-1';
      
      // Agregamos todas las preguntas a esta página
      questions.forEach(question => {
        page.appendChild(question.cloneNode(true));
      });
      
      weaknessesPages.appendChild(page);
      
      // Reemplazamos las preguntas originales con la página
      weaknessesContainer.innerHTML = '';
      weaknessesContainer.appendChild(weaknessesPages);
    }
  }
  
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
    
    // Navegar al paso de resultados
    // En la función calculateHandler, modifica la parte donde navega al paso de resultados:
    // Navegar al paso de resultados
    setTimeout(function() {
      if (stepperEl) {
        try {
          // Intenta forzar la navegación al último paso (resultados)
          const stepsCount = document.querySelectorAll('.bs-stepper-header .step').length;
          // Si hay 4 pasos, el índice es 3 (0-based)
          console.log('Intentando navegar al paso de resultados. Número de pasos:', stepsCount);
          stepperEl.to(stepsCount - 1); // Usar el último paso disponible
          
          // Como respaldo, también intentar hacer clic manualmente en el botón del último paso
          const resultStepButton = document.querySelector('[data-target="#results-step"]');
          if (resultStepButton) {
            console.log('Haciendo clic en el botón de resultados como respaldo');
            resultStepButton.click();
          }
        } catch (error) {
          console.error('Error al navegar al paso de resultados:', error);
          // Intento alternativo
          const resultStepButton = document.querySelector('[data-target="#results-step"]');
          if (resultStepButton) {
            console.log('Usando método alternativo para navegar a resultados');
            resultStepButton.click();
          }
        }
      }
      
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
    
    // Generar preguntas de fortalezas
    generateQuestions(strengthsQuestions, strengthsContainer);
    
    // Generar preguntas de debilidades
    generateQuestions(weaknessesQuestions, weaknessesContainer);
    
    // Mostrar todas las preguntas en una sola página
    initStrengthsDisplay();
    initWeaknessesDisplay();
    
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
    
    // Mostrar temperamentos dominante y secundario
    const primary = scores[0].type;
    const secondary = scores[1].type;
    
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
  
  // Configurar eventos
  function setEventHandlers() {
    if (!btnCalculate) {
      console.error('Botón de cálculo no encontrado');
      return;
    }
    
    // Limpiar todos los listeners existentes
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
        e.preventDefault();
        if (stepperEl) {
          setTimeout(function() {
            stepperEl.next();
          }, 100);
        }
      });
    });
    
    document.querySelectorAll('.btn-prev').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        if (stepperEl) stepperEl.previous();
      });
    });
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
  window.addEventListener('load', function() {
    initTest();
  });
  
  // También iniciar directamente
  initTest();
});
