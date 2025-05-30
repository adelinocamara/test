'use strict'

/*
  min-profile-web/2025.0.0
  Copyright (C) by Luis Silva & Adelino Camara. All Rights Reserved.
  Unauthorized use, copy, modify, fork, merge, publish, distribute, sublicense, sell, is strictly prohibited.
  Proprietary and confidential.
*/

export const LOCAL_TEST = Object.freeze({
  based_last_evaluation: {
    en: 'Based on your last evaluation',
    es: 'Basado en tu última evaluación'
  },
  temperament_instructions: {
    en: 'Read the four words of each line (horizontally). Select 1 of the 4 words with which you feel most identified. Mark the corresponding letter. Then add up each marked letter and verify your result.',
    es: 'Lee las cuatro palabras de cada línea (de manera horizontal). Selecciona 1 de las 4 palabras con las que te sientas más identificado. Marca la letra correspondiente. Luego suma cada letra marcada y verifique tu resultado.'
  },
  temperament_info: {
    en: 'You should know that each person has a dominant temperament and one that complements it. The dominant temperament is the one in which you have the highest score or letters and the secondary temperament corresponds to the second highest score or letter.',
    es: 'Debes saber que cada persona tiene un temperamento dominante y uno secundario que lo complementa. El temperamento dominante es aquel en el cual tienes la mayor puntuación o letras y el temperamento secundario corresponde a la segunda más alta puntuación o letra.'
  },
  temperament_columns: {
    en: 'Each column contains the strengths and weaknesses of each temperament.',
    es: 'Cada columna contiene las fortalezas y debilidades de cada temperamento.'
  },
  column_a: {
    en: 'The column of [a] = Sanguine',
    es: 'La columna de las [a] = Sanguíneo'
  },
  column_b: {
    en: 'The column of [b] = Choleric',
    es: 'La columna de las [b] = Colérico'
  },
  column_c: {
    en: 'The column of [c] = Melancholic',
    es: 'La columna de las [c] = Melancólico'
  },
  column_d: {
    en: 'The [d] column = Phlegmatic',
    es: 'La columna de las [d] = Flemático'
  },
  best_temperament: {
    en: 'WHAT IS THE BEST TEMPERAMENT?',
    es: '¿CUÁL ES EL MEJOR TEMPERAMENTO?'
  },
  temperament_conclusion: {
    en: 'There\'s no such thing as a \"right\" or \"wrong\" temperament. The best temperament is when a person lives up to their strengths. In fact, most of us don\'t even know what our personality strengths are.',
    es: 'No existe un temperamento \"correcto\" o \"equivocado\". El mejor temperamento es cuando una persona vive en sus fortalezas. En realidad, la mayoría de nosotros ni sabemos cuáles son las fortalezas de nuestra personalidad.'
  },
  start_test: {
    en: 'Start Test',
    es: 'Comenzar Test'
  },
  select_one_option: {
    en: 'Select 1 of the 4 words you most identify with in each row.',
    es: 'Selecciona 1 de las 4 palabras con las que te sientas más identificado en cada fila.'
  },
  calculate_results: {
    en: 'Calculate Results',
    es: 'Calcular Resultados'
  },
  your_results: {
    en: 'Your Results',
    es: 'Tus Resultados'
  },
  strengths_op1a_lively: {
    "en": "Lively",
    "es": "Animado"
  },
  strengths_op1b_adventurous: {
    "en": "Adventurous",
    "es": "Aventurero"
  },
  strengths_op1c_analytical: {
    "en": "Analytical",
    "es": "Analítico"
  },
  strengths_op1d_adaptable: {
    "en": "Adaptable",
    "es": "Adaptable"
  },
  strengths_op2a_playful: {
    "en": "Playful",
    "es": "Juguetón"
  },
  strengths_op2b_persuasive: {
    "en": "Persuasive",
    "es": "Persuasivo"
  },
  strengths_op2c_persistent: {
    "en": "Persistent",
    "es": "Persistente"
  },
  strengths_op2d_placid: {
    "en": "Placid",
    "es": "Plácido"
  },
  strengths_op3a_sociable: {
    "en": "Sociable",
    "es": "Sociable"
  },
  strengths_op3b_determined: {
    "en": "Determined",
    "es": "Decidido"
  },
  strengths_op3c_selfless: {
    "en": "Selfless",
    "es": "Abnegado"
  },
  strengths_op3d_submissive: {
    "en": "Submissive",
    "es": "Sumiso"
  },
  strengths_op4a_convincing: {
    "en": "Convincing",
    "es": "Convincente"
  },
  strengths_op4b_competitive: {
    "en": "Competitive",
    "es": "Competitivo"
  },
  strengths_op4c_considerate: {
    "en": "Considerate",
    "es": "Considerado"
  },
  strengths_op4d_controlled: {
    "en": "Controlled",
    "es": "Controlado"
  },
  strengths_op5a_stimulating: {
    "en": "Stimulating",
    "es": "Estimulante"
  },
  strengths_op5b_inventive: {
    "en": "Inventive",
    "es": "Inventivo"
  },
  strengths_op5c_respectful: {
    "en": "Respectful",
    "es": "Respetuoso"
  },
  strengths_op5d_reserved: {
    "en": "Reserved",
    "es": "Reservado"
  },
  strengths_op6a_vibrant: {
    "en": "Vibrant",
    "es": "Vivaz"
  },
  strengths_op6b_selfsufficient: {
    "en": "Self-sufficient",
    "es": "Autosuficiente"
  },
  strengths_op6c_sensitive: {
    "en": "Sensitive",
    "es": "Sensible"
  },
  strengths_op6d_content: {
    "en": "Content",
    "es": "Contento"
  },
  strengths_op7a_promoter: {
    "en": "Promoter",
    "es": "Promotor"
  },
  strengths_op7b_positive: {
    "en": "Positive",
    "es": "Positivo"
  },
  strengths_op7c_planner: {
    "en": "Planner",
    "es": "Planificador"
  },
  strengths_op7d_patient: {
    "en": "Patient",
    "es": "Paciente"
  },
  strengths_op8a_spontaneous: {
    "en": "Spontaneous",
    "es": "Espontáneo"
  },
  strengths_op8b_confident: {
    "en": "Confident",
    "es": "Seguro"
  },
  strengths_op8c_scheduled: {
    "en": "Scheduled",
    "es": "Sigue un horario"
  },
  strengths_op8d_shy: {
    "en": "Shy",
    "es": "Tímido"
  },
  strengths_op9a_optimistic: {
    "en": "Optimistic",
    "es": "Optimista"
  },
  strengths_op9b_frank: {
    "en": "Frank",
    "es": "Franco"
  },
  strengths_op9c_orderly: {
    "en": "Orderly",
    "es": "Ordenado"
  },
  strengths_op9d_obliging: {
    "en": "Obliging",
    "es": "Complaciente"
  },
  strengths_op10a_humorous: {
    "en": "Humorous",
    "es": "Humorístico"
  },
  strengths_op10b_dominant: {
    "en": "Dominant",
    "es": "Dominante"
  },
  strengths_op10c_faithful: {
    "en": "Faithful",
    "es": "Fiel"
  },
  strengths_op10d_friendly: {
    "en": "Friendly",
    "es": "Amigable"
  },
  strengths_op11a_charming: {
    "en": "Charming",
    "es": "Encantador"
  },
  strengths_op11b_daring: {
    "en": "Daring",
    "es": "Osado"
  },
  strengths_op11c_detailed: {
    "en": "Detailed",
    "es": "Detallista"
  },
  strengths_op11d_diplomatic: {
    "en": "Diplomatic",
    "es": "Diplomático"
  },
  strengths_op12a_cheerful: {
    "en": "Cheerful",
    "es": "Alegre"
  },
  strengths_op12b_confident: {
    "en": "Confident",
    "es": "Confiado"
  },
  strengths_op12c_cultured: {
    "en": "Cultured",
    "es": "Culto"
  },
  strengths_op12d_consistent: {
    "en": "Consistent",
    "es": "Constante"
  },
  strengths_op13a_inspiring: {
    "en": "Inspiring",
    "es": "Inspirador"
  },
  strengths_op13b_independent: {
    "en": "Independent",
    "es": "Independiente"
  },
  strengths_op13c_idealistic: {
    "en": "Idealistic",
    "es": "Idealista"
  },
  strengths_op13d_harmless: {
    "en": "Harmless",
    "es": "Inofensivo"
  },
  strengths_op14a_warm: {
    "en": "Warm",
    "es": "Cálido"
  },
  strengths_op14b_decisive: {
    "en": "Decisive",
    "es": "Decisivo"
  },
  strengths_op14c_introspective: {
    "en": "Introspective",
    "es": "Introspectivo"
  },
  strengths_op14d_dryhumor: {
    "en": "Dry humor",
    "es": "Humor seco"
  },
  strengths_op15a_tractable: {
    "en": "Tractable",
    "es": "Tratable"
  },
  strengths_op15b_instigator: {
    "en": "Instigator",
    "es": "Instigador"
  },
  strengths_op15c_musical: {
    "en": "Musical",
    "es": "Músico"
  },
  strengths_op15d_peacemaker: {
    "en": "Peacemaker",
    "es": "Conciliador"
  },
  strengths_op16a_talker: {
    "en": "Talker",
    "es": "Conversador"
  },
  strengths_op16b_tenacious: {
    "en": "Tenacious",
    "es": "Tenaz"
  },
  strengths_op16c_thoughtful: {
    "en": "Thoughtful",
    "es": "Considerado"
  },
  strengths_op16d_tolerant: {
    "en": "Tolerant",
    "es": "Tolerante"
  },
  strengths_op17a_energetic: {
    "en": "Energetic",
    "es": "Enérgico"
  },
  strengths_op17b_leader: {
    "en": "Leader",
    "es": "Líder"
  },
  strengths_op17c_loyal: {
    "en": "Loyal",
    "es": "Leal"
  },
  strengths_op17d_listener: {
    "en": "Listener",
    "es": "Escucha"
  },
  strengths_op18a_lovable: {
    "en": "Lovable",
    "es": "Adorable"
  },
  strengths_op18b_chief: {
    "en": "Chief",
    "es": "Jefe"
  },
  strengths_op18c_chartmaker: {
    "en": "Chart maker",
    "es": "Crea gráficas"
  },
  strengths_op18d_contented: {
    "en": "Contented",
    "es": "Contento"
  },
  strengths_op19a_popular: {
    "en": "Popular",
    "es": "Popular"
  },
  strengths_op19b_productive: {
    "en": "Productive",
    "es": "Productivo"
  },
  strengths_op19c_perfectionist: {
    "en": "Perfectionist",
    "es": "Perfeccionista"
  },
  strengths_op19d_permissive: {
    "en": "Permissive",
    "es": "Permisivo"
  },
  strengths_op20a_jovial: {
    "en": "Jovial",
    "es": "Jovial"
  },
  strengths_op20b_bold: {
    "en": "Bold",
    "es": "Atrevido"
  },
  strengths_op20c_behaveswell: {
    "en": "Behaves well",
    "es": "Se comporta bien"
  },
  strengths_op20d_balanced: {
    "en": "Balanced",
    "es": "Equilibrado"
  },
  weaknesses_op21a_strident: {
    "en": "Strident",
    "es": "Estridente"
  },
  weaknesses_op21b_bossy: {
    "en": "Bossy",
    "es": "Mandón"
  },
  weaknesses_op21c_shy: {
    "en": "Shy",
    "es": "Vergonzoso"
  },
  weaknesses_op21d_bland: {
    "en": "Bland",
    "es": "Soso"
  },
  weaknesses_op22a_undisciplined: {
    "en": "Undisciplined",
    "es": "Indisciplinado"
  },
  weaknesses_op22b_unsympathetic: {
    "en": "Unsympathetic",
    "es": "Antipático"
  },
  weaknesses_op22c_unforgiving: {
    "en": "Unforgiving",
    "es": "Implacable"
  },
  weaknesses_op22d_unenthusiastic: {
    "en": "Unenthusiastic",
    "es": "Sin entusiasmo"
  },
  weaknesses_op23a_repetitive: {
    "en": "Repetitive",
    "es": "Repetidor"
  },
  weaknesses_op23b_resistant: {
    "en": "Resistant",
    "es": "Resistente"
  },
  weaknesses_op23c_resentful: {
    "en": "Resentful",
    "es": "Resentido"
  },
  weaknesses_op23d_reticent: {
    "en": "Reticent",
    "es": "Reticente"
  },
  weaknesses_op24a_forgetful: {
    "en": "Forgetful",
    "es": "Olvidadizo"
  },
  weaknesses_op24b_frank: {
    "en": "Blunt",
    "es": "Cortante"
  },
  weaknesses_op24c_demanding: {
    "en": "Demanding",
    "es": "Exigente"
  },
  weaknesses_op24d_fearful: {
    "en": "Fearful",
    "es": "Temeroso"
  },
  weaknesses_op25a_interrupts: {
    "en": "Interrupts",
    "es": "Interrumpe"
  },
  weaknesses_op25b_impatient: {
    "en": "Impatient",
    "es": "Impaciente"
  },
  weaknesses_op25c_insecure: {
    "en": "Insecure",
    "es": "Inseguro"
  },
  weaknesses_op25d_indecisive: {
    "en": "Indecisive",
    "es": "Indeciso"
  },
  weaknesses_op26a_unpredictable: {
    "en": "Unpredictable",
    "es": "Imprevisible"
  },
  weaknesses_op26b_cold: {
    "en": "Cold",
    "es": "Frío"
  },
  weaknesses_op26c_unpopular: {
    "en": "Unpopular",
    "es": "Impopular"
  },
  weaknesses_op26d_uncommitted: {
    "en": "Uncommitted",
    "es": "No comprometido"
  },
  weaknesses_op27a_careless: {
    "en": "Careless",
    "es": "Descuidado"
  },
  weaknesses_op27b_stubborn: {
    "en": "Stubborn",
    "es": "Terco"
  },
  weaknesses_op27c_hardtoplease: {
    "en": "Hard to please",
    "es": "Difícil contentar"
  },
  weaknesses_op27d_hesitant: {
    "en": "Hesitant",
    "es": "Vacilante"
  },
  weaknesses_op28a_permissive: {
    "en": "Permissive",
    "es": "Permisivo"
  },
  weaknesses_op28b_proud: {
    "en": "Proud",
    "es": "Orgulloso"
  },
  weaknesses_op28c_pessimistic: {
    "en": "Pessimistic",
    "es": "Pesimista"
  },
  weaknesses_op28d_plain: {
    "en": "Plain",
    "es": "Insípido"
  },
  weaknesses_op29a_angryperson: {
    "en": "Angry person",
    "es": "Iracundo"
  },
  weaknesses_op29b_argumentative: {
    "en": "Argumentative",
    "es": "Argumentador"
  },
  weaknesses_op29c_taciturn: {
    "en": "Taciturn",
    "es": "Taciturno"
  },
  weaknesses_op29d_aimless: {
    "en": "Aimless",
    "es": "Sin objetivos"
  },
  weaknesses_op30a_naive: {
    "en": "Naive",
    "es": "Ingenuo"
  },
  weaknesses_op30b_nervy: {
    "en": "Nervy",
    "es": "Atrevido"
  },
  weaknesses_op30c_negative: {
    "en": "Negative",
    "es": "Negativo"
  },
  weaknesses_op30d_nonchalant: {
    "en": "Nonchalant",
    "es": "Despreocupado"
  },
  weaknesses_op31a_wantscredit: {
    "en": "Wants credit",
    "es": "Quiere el crédito"
  },
  weaknesses_op31b_workaholic: {
    "en": "Workaholic",
    "es": "Adicto al trabajo"
  },
  weaknesses_op31c_withdrawn: {
    "en": "Withdrawn",
    "es": "Retraído"
  },
  weaknesses_op31d_worried: {
    "en": "Worried",
    "es": "Ansioso"
  },
  weaknesses_op32a_talkative: {
    "en": "Talkative",
    "es": "Hablador"
  },
  weaknesses_op32b_tactless: {
    "en": "Tactless",
    "es": "Indiscreto"
  },
  weaknesses_op32c_toosenitive: {
    "en": "Too sensitive",
    "es": "Susceptible"
  },
  weaknesses_op32d_timid: {
    "en": "Timid",
    "es": "Tímido"
  },
  weaknesses_op33a_disorganized: {
    "en": "Disorganized",
    "es": "Desorganizado"
  },
  weaknesses_op33b_domineering: {
    "en": "Domineering",
    "es": "Dominante"
  },
  weaknesses_op33c_depressed: {
    "en": "Depressed",
    "es": "Deprimido"
  },
  weaknesses_op33d_doubtful: {
    "en": "Doubtful",
    "es": "Dudoso"
  },
  weaknesses_op34a_inconsistent: {
    "en": "Inconsistent",
    "es": "Inconsistente"
  },
  weaknesses_op34b_intolerant: {
    "en": "Intolerant",
    "es": "Intolerante"
  },
  weaknesses_op34c_introverted: {
    "en": "Introverted",
    "es": "Introvertido"
  },
  weaknesses_op34d_indifferent: {
    "en": "Indifferent",
    "es": "Indiferente"
  },
  weaknesses_op35a_messy: {
    "en": "Messy",
    "es": "Desordenado"
  },
  weaknesses_op35b_manipulative: {
    "en": "Manipulative",
    "es": "Manipulador"
  },
  weaknesses_op35c_moody: {
    "en": "Moody",
    "es": "Desanimado"
  },
  weaknesses_op35d_mumbles: {
    "en": "Mumbles",
    "es": "Masculla"
  },
  weaknesses_op36a_showy: {
    "en": "Showy",
    "es": "Ostentoso"
  },
  weaknesses_op36b_stubborn: {
    "en": "Stubborn",
    "es": "Testarudo"
  },
  weaknesses_op36c_skeptical: {
    "en": "Skeptical",
    "es": "Escéptico"
  },
  weaknesses_op36d_slow: {
    "en": "Slow",
    "es": "Lento"
  },
  weaknesses_op37a_loud: {
    "en": "Loud",
    "es": "Ruidoso"
  },
  weaknesses_op37b_lordly: {
    "en": "Lordly",
    "es": "Prepotente"
  },
  weaknesses_op37c_loner: {
    "en": "Loner",
    "es": "Solitario"
  },
  weaknesses_op37d_lazy: {
    "en": "Lazy",
    "es": "Flojo"
  },
  weaknesses_op38a_scatterbrained: {
    "en": "Scatterbrained",
    "es": "Atolondrado"
  },
  weaknesses_op38b_shorttempered: {
    "en": "Short-tempered",
    "es": "Malgeniado"
  },
  weaknesses_op38c_suspicious: {
    "en": "Suspicious",
    "es": "Suspicaz"
  },
  weaknesses_op38d_sluggish: {
    "en": "Sluggish",
    "es": "Perezoso"
  },
  weaknesses_op39a_restless: {
    "en": "Restless",
    "es": "Inquieto"
  },
  weaknesses_op39b_rash: {
    "en": "Rash",
    "es": "Precipitado"
  },
  weaknesses_op39c_revengeful: {
    "en": "Revengeful",
    "es": "Vengativo"
  },
  weaknesses_op39d_reluctant: {
    "en": "Reluctant",
    "es": "Poca voluntad"
  },
  weaknesses_op40a_changeable: {
    "en": "Changeable",
    "es": "Variable"
  },
  weaknesses_op40b_crafty: {
    "en": "Crafty",
    "es": "Astuto"
  },
  weaknesses_op40c_critical: {
    "en": "Critical",
    "es": "Crítico"
  },
  weaknesses_op40d_compromising: {
    "en": "Compromising",
    "es": "Comprometedor"
  },
  temperament_sanguine_name: {
    "en": "Sanguine",
    "es": "Sanguíneo"
  },
  temperament_sanguine_description: {
    "en": "The sanguine temperament is characterized by being extroverted, sociable, talkative, and enthusiastic. They are cheerful, optimistic people who enjoy social life and love being surrounded by people.",
    "es": "El temperamento sanguíneo se caracteriza por ser extrovertido, sociable, hablador y entusiasta. Son personas alegres, optimistas, que disfrutan de la vida social y les encanta estar rodeados de gente."
  },
  temperament_sanguine_strengths: {
    "en": "Charisma, enthusiasm, creativity, ability to inspire others, ease of making friends, optimism and natural joy.",
    "es": "Carisma, entusiasmo, creatividad, capacidad para inspirar a otros, facilidad para hacer amigos, optimismo y alegría natural."
  },
  temperament_sanguine_weaknesses: {
    "en": "Disorganization, lack of discipline, tendency to talk too much, difficulty concentrating and finishing projects, constant search for attention.",
    "es": "Desorganización, falta de disciplina, tendencia a hablar demasiado, dificultad para concentrarse y terminar proyectos, búsqueda constante de atención."
  },
  temperament_choleric_name: {
    "en": "Choleric",
    "es": "Colérico"
  },
  temperament_choleric_description: {
    "en": "The choleric temperament is dynamic, active, practical, independent, and decisive. They are natural leaders, goal-oriented, who enjoy challenges and make decisions quickly.",
    "es": "El temperamento colérico es dinámico, activo, práctico, independiente y decidido. Son líderes naturales, orientados a metas, que disfrutan los desafíos y toman decisiones rápidamente."
  },
  temperament_choleric_strengths: {
    "en": "Leadership, determination, productivity, decision-making ability, self-sufficiency, results orientation, and clear vision.",
    "es": "Liderazgo, determinación, productividad, capacidad para tomar decisiones, autosuficiencia, orientación a resultados y visión clara."
  },
  temperament_choleric_weaknesses: {
    "en": "Impatience, stubbornness, tendency to dominate others, intolerance, difficulty showing emotions, propensity for anger when contradicted.",
    "es": "Impaciencia, terquedad, tendencia a dominar a otros, intolerancia, dificultad para mostrar emociones, propensión a la ira cuando se les contradice."
  },
  temperament_melancholic_name: {
    "en": "Melancholic",
    "es": "Melancólico"
  },
  temperament_melancholic_description: {
    "en": "The melancholic temperament is analytical, deep, perfectionist, and detail-oriented. They are reflective, orderly, loyal people with great capacity for abstract thinking and artistic creativity.",
    "es": "El temperamento melancólico es analítico, profundo, perfeccionista y detallista. Son personas reflexivas, ordenadas, fieles, con gran capacidad para el pensamiento abstracto y la creatividad artística."
  },
  temperament_melancholic_strengths: {
    "en": "Attention to detail, perfectionism, loyalty, emotional and intellectual depth, sensitivity, high analytical and creative capacity.",
    "es": "Atención al detalle, perfeccionismo, lealtad, profundidad emocional e intelectual, sensibilidad, alta capacidad analítica y creativa."
  },
  temperament_melancholic_weaknesses: {
    "en": "Tendency towards depression, excessive self-criticism, indecision due to fear of making mistakes, pessimism, expectations too high for oneself and others.",
    "es": "Tendencia a la depresión, autocrítica excesiva, indecisión por miedo a equivocarse, pesimismo, expectativas demasiado altas de sí mismo y de los demás."
  },
  temperament_phlegmatic_name: {
    "en": "Phlegmatic",
    "es": "Flemático"
  },
  temperament_phlegmatic_description: {
    "en": "The phlegmatic temperament is calm, serene, patient, and balanced. They are peaceful, adaptable, diplomatic people who avoid conflicts and remain calm in crisis situations.",
    "es": "El temperamento flemático es tranquilo, sereno, paciente y equilibrado. Son personas pacíficas, adaptables, diplomáticas, que evitan los conflictos y mantienen la calma en situaciones de crisis."
  },
  temperament_phlegmatic_strengths: {
    "en": "Patience, diplomacy, emotional stability, reliability, ability to mediate conflicts, capacity to listen and maintain harmonious relationships.",
    "es": "Paciencia, diplomacia, estabilidad emocional, confiabilidad, habilidad para mediar en conflictos, capacidad para escuchar y mantener relaciones armoniosas."
  },
  temperament_phlegmatic_weaknesses: {
    "en": "Resistance to change, indecision, procrastination, lack of initiative, tendency to avoid necessary confrontations, conformism.",
    "es": "Resistencia al cambio, indecisión, procrastinación, falta de iniciativa, tendencia a evitar confrontaciones necesarias, conformismo."
  },
  temperament_description_combination: {
    "en": "description_combination.",
    "es": "description_combination."
  },
  temperament_combination_sanguineo_colerico: {
    "en": "You combine the sociability and enthusiasm of the sanguine with the determination and goal orientation of the choleric. You are very extroverted, dynamic and persuasive, with a great ability to inspire others and lead projects. You can be impulsive and need to work on consistency and patience.",
    "es": "Combinas la sociabilidad y el entusiasmo del sanguíneo con la determinación y orientación a metas del colérico. Eres muy extrovertido, dinámico y persuasivo, con gran capacidad para inspirar a otros y liderar proyectos. Puedes ser impulsivo y necesitas trabajar en la constancia y la paciencia."
  },
  temperament_combination_sanguineo_melancolico: {
    "en": "You mix the joy and sociability of the sanguine with the depth and sensitivity of the melancholic. You are creative, emotionally expressive, and perceptive. You can easily connect with people but also need time alone to reflect. Your challenge is to balance impulsivity with planning.",
    "es": "Mezclas la alegría y sociabilidad del sanguíneo con la profundidad y sensibilidad del melancólico. Eres creativo, expresivo emocionalmente y perceptivo. Tienes facilidad para conectar con la gente pero también necesitas tiempo a solas para reflexionar. Tu desafío es equilibrar la impulsividad con la planificación."
  },
  temperament_combination_sanguineo_flematico: {
    "en": "You combine the enthusiasm of the sanguine with the stability of the phlegmatic. You are sociable but with a calm side that helps you be more balanced. You adapt well to different social situations and are diplomatic. You need to work on organization and consistency in your projects.",
    "es": "Combinas el entusiasmo del sanguíneo con la estabilidad del flemático. Eres sociable pero con un lado tranquilo que te ayuda a ser más equilibrado. Te adaptas bien a diferentes situaciones sociales y eres diplomático. Necesitas trabajar en la organización y la constancia en tus proyectos."
  },
  temperament_combination_colerico_sanguineo: {
    "en": "You mix the leadership of the choleric with the charisma of the sanguine. You have a dynamic, persuasive, and motivating personality. You are a good communicator and can easily inspire others toward your goals. You need to control impatience and the tendency to dominate conversations.",
    "es": "Mezclas el liderazgo del colérico con el carisma del sanguíneo. Tienes una personalidad dinámica, persuasiva y motivadora. Eres buen comunicador y tienes facilidad para inspirar a otros hacia tus objetivos. Necesitas controlar la impaciencia y la tendencia a dominar conversaciones."
  },
  temperament_combination_colerico_melancolico: {
    "en": "You combine the determination of the choleric with the depth of the melancholic. You are decisive, goal-oriented, and very analytical. You have high standards for yourself and others. Your challenges include managing perfectionism and impatience when things don't go as planned.",
    "es": "Combinas la determinación del colérico con la profundidad del melancólico. Eres decidido, orientado a metas y muy analítico. Tienes altos estándares para ti mismo y los demás. Tus desafíos incluyen gestionar el perfeccionismo y la impaciencia cuando las cosas no salen como las planeas."
  },
  temperament_combination_colerico_flematico: {
    "en": "You mix the results orientation of the choleric with the stability of the phlegmatic. You are a balanced leader who can make quick decisions but with some caution. You have the ability to remain calm under pressure while staying productive. You should work on listening more to others.",
    "es": "Mezclas la orientación a resultados del colérico con la estabilidad del flemático. Eres un líder equilibrado, que puede tomar decisiones rápidas pero con cierta cautela. Tienes habilidad para mantener la calma bajo presión mientras sigues siendo productivo. Debes trabajar en escuchar más a los demás."
  },
  temperament_combination_melancolico_sanguineo: {
    "en": "You combine the depth of the melancholic with the enthusiasm of the sanguine. You are reflective but with the ability to express yourself and connect with others. You have artistic talent and emotional sensitivity along with moments of spontaneity. Your challenge is not to be too self-critical or to be carried away by emotional extremes.",
    "es": "Combinas la profundidad del melancólico con el entusiasmo del sanguíneo. Eres reflexivo pero con capacidad para expresarte y conectar con otros. Tienes talento artístico y sensibilidad emocional junto con momentos de espontaneidad. Tu reto es no ser demasiado autocrítico ni dejarte llevar por extremos emocionales."
  },
  temperament_combination_melancolico_colerico: {
    "en": "You mix the precision of the melancholic with the determination of the choleric. You are a perfectionist, detail-oriented, and very efficient. You have high analytical capacity and can implement plans with excellence. You need to work on being more flexible and less critical of yourself and others.",
    "es": "Mezclas la precisión del melancólico con la determinación del colérico. Eres perfeccionista, orientado a detalles y muy eficiente. Tienes alta capacidad de análisis y puedes implementar planes con excelencia. Necesitas trabajar en ser más flexible y menos crítico contigo mismo y con los demás."
  },
  temperament_combination_melancolico_flematico: {
    "en": "You combine the depth of the melancholic with the patience of the phlegmatic. You are reflective, considerate, and very loyal. You have a great capacity for deep thinking and detailed planning. Your challenge is to overcome the tendency toward indecision and procrastination that can arise from this combination.",
    "es": "Combinas la profundidad del melancólico con la paciencia del flemático. Eres reflexivo, considerado y muy leal. Tienes gran capacidad para el pensamiento profundo y la planificación detallada. Tu desafío es vencer la tendencia a la indecisión y la procrastinación que puede surgir de esta combinación."
  },
  temperament_combination_flematico_sanguineo: {
    "en": "You mix the calm of the phlegmatic with the sociability of the sanguine. You are adaptable, friendly, and a good mediator. You have a quiet charm that attracts others and allows you to build stable relationships. You need to work on initiative and on expressing your opinions and feelings more.",
    "es": "Mezclas la calma del flemático con la sociabilidad del sanguíneo. Eres adaptable, amigable y buen mediador. Tienes un encanto tranquilo que atrae a los demás y te permite construir relaciones estables. Necesitas trabajar en la iniciativa y en expresar más tus opiniones y sentimientos."
  },
  temperament_combination_flematico_colerico: {
    "en": "You combine the stability of the phlegmatic with the drive of the choleric. You are reliable, efficient, and persistent. You have the ability to work consistently toward your goals without getting upset. Your challenge is to be more flexible and enthusiastic, as well as to express your desires and needs more clearly.",
    "es": "Combinas la estabilidad del flemático con el empuje del colérico. Eres confiable, eficiente y persistente. Tienes capacidad para trabajar consistentemente hacia tus metas sin alterarte. Tu desafío es ser más flexible y entusiasta, además de expresar con más claridad tus deseos y necesidades."
  },
  temperament_combination_flematico_melancolico: {
    "en": "You mix the patience of the phlegmatic with the precision of the melancholic. You are very observant, faithful, reliable, and detail-oriented. You have a great capacity for tasks that require prolonged concentration and precision. You need to work on being more proactive and less fearful of changes and challenges.",
    "es": "Mezclas la paciencia del flemático con la precisión del melancólico. Eres muy observador, fiel, confiable y detallista. Tienes gran capacidad para tareas que requieren concentración prolongada y precisión. Necesitas trabajar en ser más proactivo y menos temeroso ante los cambios y desafíos."
  },
  total_sum: {
    en: 'Total sum',
    es: 'Suma total'
  },
  your_temperament: {
    en: 'Your temperament',
    es: 'Tu temperamento'
  },
  dominant: {
    en: 'Dominant',
    es: 'Dominante'
  },
  secondary: {
    en: 'Secondary',
    es: 'Secundario'
  },
  about_temperament: {
    en: 'About your temperament',
    es: 'Acerca de tu temperamento'
  },
  restart_test: {
    en: 'Restart test',
    es: 'Reiniciar test'
  },
  save_results: {
    en: 'Save results',
    es: 'Guardar resultados'
  },
  answer_all: {
    en: 'You must answer all the questions. Missing',
    es: 'Debes responder todas las preguntas. Faltan'
  },
  answers_missing: {
    en: 'answers',
    es: 'respuestas'
  },
  your_main_strengths: {
    en: 'Your main strengths',
    es: 'Tus principales fortalezas'
  },
  aspects_to_work_on: {
    en: 'Aspects to work on',
    es: 'Aspectos a trabajar'
  },
  your_combination: {
    en: 'Your combination',
    es: 'Tu combinación'
  },
});

export default LOCAL_TEST
