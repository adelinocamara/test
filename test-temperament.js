/**
 * Temperamento Test - Script principal
 */

document.addEventListener('DOMContentLoaded', function() {
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

  // Información de temperamentos
  const temperamentInfo = {
    sanguineo: {
      name: "Sanguíneo",
      description: "El temperamento Sanguíneo se caracteriza por ser extrovertido, hablador, entusiasta y expresivo. Eres una persona sociable que disfruta estar rodeada de gente, sueles ser el alma de la fiesta. Eres optimista, espontáneo y tienes buen sentido del humor. Te resulta fácil hacer amigos y eres carismático.",
      strengths: "Entusiasmo, carisma, sociabilidad, expresividad, creatividad.",
      weaknesses: "Desorganización, indisciplina, impulsividad, olvidos frecuentes, hablador en exceso."
    },
    colerico: {
      name: "Colérico",
      description: "El temperamento Colérico es orientado a metas, decidido, y con gran capacidad de liderazgo. Eres práctico, productivo y te centras en resultados. Tomas decisiones rápidamente, eres determinado y tienes una fuerte voluntad. Te encanta enfrentar desafíos y resolver problemas.",
      strengths: "Liderazgo, productividad, determinación, independencia, enfoque en resultados.",
      weaknesses: "Impaciencia, dominancia, intolerancia, frialdad emocional, tendencia a ser mandón."
    },
    melancolico: {
      name: "Melancólico",
      description: "El temperamento Melancólico es perfeccionista, analítico y detallista. Eres profundo, reflexivo y aprecias la belleza y la excelencia. Te orientas a la calidad, eres organizado y tienes estándares altos. Valoras la planificación, el orden y los principios.",
      strengths: "Análisis, organización, perfeccionismo, lealtad, sensibilidad.",
      weaknesses: "Tendencia a la depresión, indecisión, autocrítica excesiva, expectativas poco realistas, pesimismo."
    },
    flematico: {
      name: "Flemático",
      description: "El temperamento Flemático es tranquilo, pacífico y adaptable. Eres una persona calma, estable y equilibrada. Te caracteriza la paciencia, la diplomacia y la capacidad para escuchar. Evitas los conflictos, eres confiable y predecible.",
      strengths: "Paciencia, diplomacia, estabilidad, adaptabilidad, confiabilidad.",
      weaknesses: "Indecisión, lentitud, falta de motivación, pasividad, resistencia al cambio."
    }
  };

  // Combinaciones más comunes
  const temperamentCombinations = {
    "sanguineo-colerico": "La combinación Sanguíneo-Colérico combina la sociabilidad extrovertida con el liderazgo decidido. Eres carismático y entusiasta, pero también orientado a resultados y metas. Esta combinación te hace un líder natural que inspira a otros mientras mantiene el enfoque en los objetivos.",
    "sanguineo-melancolico": "La combinación Sanguíneo-Melancólico combina la expresividad social con la profundidad analítica. Eres una persona carismática pero también reflexiva, con capacidad para conectar con otros mientras mantienes estándares altos y atención al detalle.",
    "sanguineo-flematico": "La combinación Sanguíneo-Flemático te hace sociable y entusiasta, pero también paciente y estable. Tienes la capacidad de ser el alma de la fiesta mientras mantienes la calma y la diplomacia en situaciones difíciles.",
    "colerico-sanguineo": "La combinación Colérico-Sanguíneo te hace un líder carismático. Orientado a resultados y metas, pero con habilidades sociales y expresivas. Sabes dirigir con determinación mientras mantienes el entusiasmo y motivas a otros.",
    "colerico-melancolico": "La combinación Colérico-Melancólico combina la orientación a resultados con la atención al detalle. Eres un líder que busca la excelencia, decisivo pero también reflexivo y analítico.",
    "colerico-flematico": "La combinación Colérico-Flemático te hace un líder estable. Tu determinación y enfoque en metas se equilibra con paciencia y diplomacia, permitiéndote tomar decisiones firmes pero consideradas.",
    "melancolico-sanguineo": "La combinación Melancólico-Sanguíneo combina la profundidad analítica con expresividad social. Eres detallista y perfeccionista, pero también puedes ser entusiasta y expresivo cuando es necesario.",
    "melancolico-colerico": "La combinación Melancólico-Colérico te hace detallista pero decidido. Tu perfeccionismo y análisis profundo se complementan con determinación y enfoque en resultados.",
    "melancolico-flematico": "La combinación Melancólico-Flemático significa profundidad con estabilidad. Eres detallista, analítico y perfeccionista, pero también paciente, adaptable y diplomático.",
    "flematico-sanguineo": "La combinación Flemático-Sanguíneo te hace tranquilo pero sociable. Tu paciencia y estabilidad se combinan con momentos de entusiasmo y expresividad social.",
    "flematico-colerico": "La combinación Flemático-Colérico combina la tranquilidad con determinación. Eres paciente y diplomático, pero también puedes ser decisivo y orientado a resultados cuando es necesario.",
    "flematico-melancolico": "La combinación Flemático-Melancólico te hace paciente y reflexivo. Tu estabilidad y adaptabilidad se complementan con atención al detalle y análisis profundo."
  };

  const stepper = document.querySelector('.bs-stepper');
  const strengthsContainer = document.getElementById('strengths-questions');
  const weaknessesContainer = document.getElementById('weaknesses-questions');
  const strengthCount = document.getElementById('strength-count');
  const weaknessCount = document.getElementById('weakness-count');
  const strengthProgress = document.getElementById('strength-progress');
  const weaknessProgress = document.getElementById('weakness-progress');
  const btnCalculate = document.getElementById('btn-calculate');
  const btnRestart = document.getElementById('btn-restart');
  const btnSave = document.getElementById('btn-save');
  
  // Variables para el seguimiento de respuestas
  let selectedOptions = new Map();
  let resultsCalculated = false;
  
  // Inicializar el stepper
  const stepperEl = new window.Stepper(stepper, {
    linear: false,
    animation: true
  });
  
  // Inicializar el test
  function initTest() {
    console.log('entro al iniciar Test');
    // Limpiar contenedores
    strengthsContainer.innerHTML = '';
    weaknessesContainer.innerHTML = '';
    selectedOptions.clear();
    resultsCalculated = false;
    
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
    selectedOption.classList.add('selected');
    
    // Guardar la selección
    selectedOptions.set(parseInt(questionNumber), letter);
    
    // Actualizar contadores
    updateCounts();
  }
  
  // Actualizar contadores
  function updateCounts() {
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
    strengthProgress.style.width = `${(answeredStrengths / 20) * 100}%`;
    
    weaknessCount.textContent = answeredWeaknesses;
    weaknessProgress.style.width = `${(answeredWeaknesses / 20) * 100}%`;
  }
  
  // Calcular resultados
  function calculateResults() {
    // Verificar que todas las preguntas estén respondidas
    if (selectedOptions.size < 40) {
      // Contar cuántas faltan
      const missing = 40 - selectedOptions.size;
      
      // Mostrar mensaje de error
      showError(`Debes responder todas las preguntas. Faltan ${missing} respuestas.`);
      return false;
    }
    
    // Contar respuestas por letra
    let countA = 0, countB = 0, countC = 0, countD = 0;
    
    for (const [questionNumber, letter] of selectedOptions.entries()) {
      switch (letter) {
        case 'a': countA++; break;
        case 'b': countB++; break;
        case 'c': countC++; break;
        case 'd': countD++; break;
      }
    }
    
    // Guardar resultados en campos ocultos
    document.getElementById('hid_result_a').value = countA;
    document.getElementById('hid_result_b').value = countB;
    document.getElementById('hid_result_c').value = countC;
    document.getElementById('hid_result_d').value = countD;
    
    // Actualizar la interfaz de resultados
    updateResults(countA, countB, countC, countD);
    
    resultsCalculated = true;
    return true;
  }
  // Actualizar la interfaz de resultados
  function updateResults(countA, countB, countC, countD) {
    // Actualizar los contadores
    document.getElementById('result-a-display').textContent = countA;
    document.getElementById('result-b-display').textContent = countB;
    document.getElementById('result-c-display').textContent = countC;
    document.getElementById('result-d-display').textContent = countD;
    
    // Calcular porcentajes para las barras de progreso
    const total = countA + countB + countC + countD;
    const percentA = total > 0 ? (countA / total) * 100 : 0;
    const percentB = total > 0 ? (countB / total) * 100 : 0;
    const percentC = total > 0 ? (countC / total) * 100 : 0;
    const percentD = total > 0 ? (countD / total) * 100 : 0;
    
    // Actualizar barras de progreso
    document.getElementById('sanguine-bar').style.width = `${percentA}%`;
    document.getElementById('choleric-bar').style.width = `${percentB}%`;
    document.getElementById('melancholic-bar').style.width = `${percentC}%`;
    document.getElementById('phlegmatic-bar').style.width = `${percentD}%`;
    
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
    if (total > 0) {
      const primary = scores[0].type;
      const secondary = scores[1].type;
      
      document.getElementById('primary-temperament').textContent = temperamentInfo[primary].name;
      document.getElementById('secondary-temperament').textContent = temperamentInfo[secondary].name;
      
      // Mostrar descripción de la combinación de temperamentos
      const combinationKey = `${primary}-${secondary}`;
      const descriptionElement = document.getElementById('temperament-description');
      
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
    Swal.fire({
      title: 'Atención',
      text: message,
      icon: 'warning',
      confirmButtonText: 'Entendido'
    });
  }
  
  // Configurar eventos
  function setEventHandlers() {
    // Botón para calcular resultados
    btnCalculate.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      console.log('Botón calcular presionado');
      
      // Intentar calcular los resultados
      const allAnswered = calculateResults();
      
      if (allAnswered) {
        console.log('Resultados calculados correctamente, intentando mostrar paso 3');
        
        // Usar un enfoque más directo para mostrar la pestaña de resultados
        // en lugar de confiar en el stepper
        try {
          // Ocultar el paso actual (debilidades)
          document.getElementById('weaknesses-step').classList.remove('active');
          
          // Mostrar el paso de resultados
          const resultsStep = document.getElementById('results-step');
          resultsStep.classList.add('active');
          
          // Actualizar la navegación del stepper manualmente
          document.querySelector('[data-target="#weaknesses-step"]').classList.remove('active');
          document.querySelector('[data-target="#results-step"]').classList.add('active');
          
          // Actualizar el índice internamente
          stepperEl._currentIndex = 3;
          
          console.log('Navegación manual completada');
        } catch (error) {
          console.error('Error en navegación manual:', error);
          
          // Como fallback, intentar usar el stepper directamente
          setTimeout(function() {
            console.log('Intentando con navegación directa');
            stepperEl.to(3);
          }, 300);
        }
      }
      
      return false;
    });
    
    // Botón para reiniciar el test
    btnRestart.addEventListener('click', () => {
      // Confirmar reinicio
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
          stepperEl.to(0); // Volver al primer paso
        }
      });
    });
    
    // Botón para guardar resultados
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
            Swal.fire({
              title: '¡Guardado!',
              text: 'Tus resultados se han guardado correctamente.',
              icon: 'success',
              confirmButtonText: 'Continuar'
            });
          } else {
            Swal.fire({
              title: 'Error',
              text: 'No se pudieron guardar los resultados. Inténtalo de nuevo.',
              icon: 'error',
              confirmButtonText: 'Entendido'
            });
          }
        })
        .catch(error => {
          console.error('Error al guardar resultados:', error);
          Swal.fire({
            title: 'Error',
            text: 'Hubo un problema al intentar guardar los resultados.',
            icon: 'error',
            confirmButtonText: 'Entendido'
          });
        });
      }
    });
    
    // Botones de navegación del stepper
    document.querySelectorAll('.btn-nxt').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevenir comportamiento predeterminado
        console.log('Botón siguiente presionado');
        
        // Obtener el paso actual
        const currentStep = stepperEl._currentIndex;
        console.log('Paso actual:', currentStep);
        
        // Avanzar al siguiente paso
        setTimeout(function() {
          stepperEl.next();
        }, 100);
      });
    });
    
    document.querySelectorAll('.btn-prev').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevenir comportamiento predeterminado
        stepperEl.previous();
      });
    });
  }

  const frmMain = document.getElementById('frmMain');
  if (frmMain) {
    frmMain.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log('Envío de formulario interceptado y prevenido');
      return false;
    });
  }
  
  // Iniciar el test al cargar la página
  console.log('va al iniciar test');
  initTest();
});
