export interface GalleryImage {
  src: string;
  title?: string;
  subtitle?: string;
}

export interface Specialty {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  iconSrc: string;
  imageBg: string;
  galleryLayout: 'grid-2x2' | 'grid-1x2';
  gallery: GalleryImage[];
  conditions: string[];
  procedures: string[];
  highlight: string;
}

export interface HeroSlide {
  id: string;
  image: string;
}

export interface ClinicInfo {
  name: string;
  tagline: string;
  subtagline: string;
  address: {
    hospital: string;
    tower: string;
    suite: string;
    street: string;
    neighborhood: string;
    zipCode: string;
    city: string;
    state: string;
    fullFormatted: string;
  };
  phones: {
    appointments: string;
    appointmentsRaw: string;
    emergencies247: string;
    emergenciesRaw: string;
    whatsapp: string;
    whatsappRaw: string;
  };
  socials: {
    facebook: string;
    instagram: string;
  };
  doctoraliaUrl: string;
  schedule: {
    weekdays: string;
    weekends: string;
    emergencies: string;
  };
  googleMapsEmbedUrl: string;
}

export const clinicInfo: ClinicInfo = {
  name: "CENNCA",
  tagline: "CENTRO DE NEUROLOGÍA Y NEUROCIRUGÍA AVANZADA",
  subtagline: "Médicos certificados y subespecializados en las diversas patologías neurológicas",
  address: {
    hospital: "Centro Médico Toluca",
    tower: "Torre de Servicios Especializados",
    suite: "Consultorio 208",
    street: "Calle Pedro Ascencio 427",
    neighborhood: "San Mateo",
    zipCode: "52140",
    city: "Metepec",
    state: "Estado de México",
    fullFormatted: "Calle Pedro Ascencio 427, San Mateo, 52140 Metepec, Méx."
  },
  phones: {
    appointments: "722 232 6528",
    appointmentsRaw: "7222326528",
    emergencies247: "55 3840 5419",
    emergenciesRaw: "5538405419",
    whatsapp: "+52 55 3840 5419",
    whatsappRaw: "525538405419"
  },
  socials: {
    facebook: "https://www.facebook.com/Cennca.Neuro/",
    instagram: "https://www.instagram.com/cennca_neuro/"
  },
  doctoraliaUrl: "https://www.doctoralia.com.mx/perfil/erick-ramos-martinez",
  schedule: {
    weekdays: "Lunes a Viernes de 9:00 a 18:00 hrs",
    weekends: "Sábados con previa cita",
    emergencies: "Atención de Urgencias Neurológicas y Neuroquirúrgicas 24 Horas / 365 Días"
  },
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.63833199599!2d-99.61388392804673!3d19.25458771604096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd8bc7db14b05f%3A0x6b8cebda9d78703d!2sCentro%20M%C3%A9dico%20Toluca.%20Servicios%20Especializados.!5e0!3m2!1ses-419!2smx!4v1791177168834!5m2!1ses-419!2smx"
};

export const heroSlides: HeroSlide[] = [
  {
    id: "doctores-quirofano",
    image: "/images/Content/IMG_7776.jpeg"
  },
  {
    id: "hemodinamia-suite",
    image: "/images/Content/hemodinamia12.png"
  },
  {
    id: "especialista-cirugia",
    image: "/images/Content/IMG_8955.jpeg"
  },
  {
    id: "quirofano-microscopio",
    image: "/images/Content/Captura de Pantalla 2021-10-27 a la(s) 21.45.40.png"
  },
  {
    id: "equipo-medico-cennca",
    image: "/images/Content/IMG_7774.jpg"
  },
  {
    id: "neuroanestesia-monitoreo",
    image: "/images/Content/Captura de Pantalla 2021-10-27 a la(s) 22.07.06.png"
  },
  {
    id: "hemodinamia-fluoroscopia",
    image: "/images/Content/hemodinamia13.png"
  },
  {
    id: "cirugia-alta-especialidad",
    image: "/images/Content/Captura de Pantalla 2021-10-27 a la(s) 23.12.21.png"
  },
  {
    id: "consultorio-cennca",
    image: "/images/Content/Sin título 2.010.jpeg"
  }
];

export const specialties: Specialty[] = [
  {
    id: "neurocirugia",
    number: 1,
    title: "Neurocirugía",
    subtitle: "Técnicas Quirúrgicas de Mínimo Impacto en Cráneo y Columna",
    shortDesc: "Tratamiento de procesos patológicos del sistema nervioso central, columna vertebral y nervio periférico con técnicas de mínimo impacto.",
    fullDesc: "Constituye una disciplina médica y quirúrgica con enfoque en el tratamiento de procesos patológicos del sistema nervioso central, columna vertebral y nervio periférico, realizamos técnicas quirúrgicas de mínimo impacto, que permiten que los pacientes tengan un pronóstico favorable y estancias cortas en el hospital.",
    iconSrc: "/wp-content/uploads/2024/07/1-e1721423318651.png",
    imageBg: "/images/Content/Captura de Pantalla 2021-10-27 a la(s) 21.45.40.png",
    galleryLayout: "grid-2x2",
    gallery: [
      { src: "/images/Content/Captura de Pantalla 2021-10-27 a la(s) 21.45.40.png" },
      { src: "/images/Content/Meningioma.png" },
      { src: "/images/Content/CLIPAJE.png" },
      { src: "/images/Content/IMG_7776.jpeg" }
    ],
    conditions: [
      "Tumor cerebral",
      "Aneurisma cerebral",
      "Malformaciones arteriovenosas cerebrales",
      "Hidrocefalia",
      "Traumatismo craneoencefálico",
      "Hematomas subdurales",
      "Hematomas epidurales",
      "Hemorragia intracerebral",
      "Hemorragia subaracnoidea",
      "Tumores de la glándula hipófisis",
      "Abscesos cerebrales",
      "Endoscopia cerebral",
      "Neurocisticercosis",
      "Tumores meníngeos",
      "Traumatismos de la columna vertebral",
      "Tumores de la médula espinal",
      "Neuralgia del trigémino"
    ],
    procedures: [
      "Resección microquirúrgica de tumores cerebrales y meníngeos",
      "Microdiscectomía y descompresión de columna vertebral",
      "Colocación de derivaciones ventriculares y endoscopia cerebral",
      "Clipaje quirúrgico de aneurismas y malformaciones vasculares",
      "Neuronavegación guiada tridimensional de alta precisión"
    ],
    highlight: "Técnicas de mínimo impacto para pronósticos favorables y estancias hospitalarias cortas."
  },
  {
    id: "neurologia",
    number: 2,
    title: "Neurología",
    subtitle: "Prevención, Diagnóstico, Tratamiento y Rehabilitación Clínica",
    shortDesc: "Competencia médica integral en el estudio del sistema nervioso central, periférico y autónomo.",
    fullDesc: "La neurología es la especialidad médica que tiene competencia en el estudio del sistema nervioso, y de las enfermedades del cerebro, la médula, los nervios periféricos y los músculos. Específicamente se ocupa de la prevención, diagnóstico, tratamiento y rehabilitación de todas las enfermedades que involucran al sistema nervioso central, sistema nervioso periférico y el sistema nervioso autónomo.",
    iconSrc: "/wp-content/uploads/2024/07/2-e1721423518109.png",
    imageBg: "/images/Content/11b0224c-9cd3-4527-9796-26cd40c30a22.jpg",
    galleryLayout: "grid-1x2",
    gallery: [
      { src: "/images/Content/11b0224c-9cd3-4527-9796-26cd40c30a22.jpg" },
      { src: "/images/Content/Sin título 2.010.jpeg" }
    ],
    conditions: [
      "Cefaleas",
      "Epilepsia",
      "Enfermedad de Parkinson",
      "Alzheimer",
      "Neuropatías",
      "Insomnio",
      "Migraña",
      "Síndrome de Guillain-Barré",
      "Infarto cerebral",
      "Neuroinfecciones"
    ],
    procedures: [
      "Evaluación clínica neurológica y neurocognitiva exhaustiva",
      "Protocolos avanzados para migraña y cefaleas refractarias",
      "Titulación y ajuste farmacológico de alta precisión en Parkinson y epilepsia",
      "Tratamiento de trastornos del sueño y neuropatías periféricas",
      "Aplicación terapéutica de toxina botulínica en espasticidad y migraña"
    ],
    highlight: "Abordaje preventivo, diagnóstico y de rehabilitación integral para la salud neurológica."
  },
  {
    id: "terapiaendovascular",
    number: 3,
    title: "Terapia Endovascular Neurológica",
    subtitle: "Diagnóstico y Tratamiento de Patologías Neurovasculares Complejas",
    shortDesc: "Tratamiento mínimamente invasivo mediante navegación intravascular selectiva para patologías cerebrales complejas.",
    fullDesc: "Constituye una subespecialidad dentro de las Neurociencias, dedicada al diagnóstico y tratamiento de Patologías Neurovasculares Complejas. Se encarga del tratamiento mínimamente invasivo único o complementario que se aplica a diversas patologías cerebrales a través de la navegación intravascular selectiva. con una morbi-mortalidad inferior a la reportada para los procedimientos quirúrgicos habituales, y recuperación inmediata, o temprana; con rápida incorporación a la vida familiar, laboral y social.",
    iconSrc: "/wp-content/uploads/2024/07/3-e1721423543606.png",
    imageBg: "/images/Content/hemodinamia12.png",
    galleryLayout: "grid-2x2",
    gallery: [
      { src: "/images/Content/hemodinamia12.png" },
      { src: "/images/Content/PUNCION ANGIOGRAFIA.jpeg" },
      { src: "/images/Content/hemodinamia23.png" },
      { src: "/images/Content/glomus carotideo.jpg" }
    ],
    conditions: [
      "Embolización de aneurismas cerebrales",
      "Embolización de malformaciones arteriovenosas cerebrales",
      "Rescate vascular cerebral (infarto cerebral)",
      "Fistulas carotido-cavernosas",
      "Fistulas durales",
      "Fistulas piales",
      "Angiografía cerebral diagnóstica",
      "Stent carotideo",
      "Malformaciones vasculares de la infancia",
      "Trombosis de senos venosos"
    ],
    procedures: [
      "Trombectomía mecánica inmediata en infarto cerebral (Código EVC urgente)",
      "Embolización con microcoils y agentes líquidos (Onyx/Squid)",
      "Angioplastia y colocación de stents carotídeos e intracraneales",
      "Angiografía cerebral digital diagnóstica biplanar por cateterismo",
      "Oclusión endovascular de fístulas arteriovenosas complejas"
    ],
    highlight: "Morbi-mortalidad reducida y rápida reincorporación a la vida familiar, laboral y social."
  },
  {
    id: "neurocirugiapediatrica",
    number: 4,
    title: "Neurocirugía pediátrica",
    subtitle: "Atención Quirúrgica, Crítica y Rehabilitación Infantil",
    shortDesc: "Evaluación y tratamiento de afecciones del sistema nervioso en niños mediante tecnología avanzada y endoscopia.",
    fullDesc: "Es una subespecialidad que se encarga de la evaluación, diagnóstico, tratamiento quirúrgico y no quirúrgico, la atención crítica y la rehabilitación de niños con trastornos del sistema nervioso. Este equipo tiene acceso a las tecnologías y técnicas más avanzadas, incluida la cirugía de invasión mínima con endoscopia.",
    iconSrc: "/wp-content/uploads/2024/07/4-e1721423564361.png",
    imageBg: "/images/Content/Captura de Pantalla 2021-10-27 a la(s) 23.12.21.png",
    galleryLayout: "grid-1x2",
    gallery: [
      { src: "/images/Content/Captura de Pantalla 2021-10-27 a la(s) 23.12.21.png" },
      { src: "/images/Content/0a2b50a9-2891-41a7-84c7-18f34745fe40.JPG" }
    ],
    conditions: [
      "Hidrocefalia",
      "Craneosinostosis",
      "Epilepsia",
      "Tumores cerebrales",
      "Disrafismos",
      "Traumatismo cráneo encefálico"
    ],
    procedures: [
      "Cirugía de invasión mínima con endoscopia cerebral pediátrica",
      "Corrección quirúrgica y remodelación craneal en craneosinostosis",
      "Colocación y reprogramación de sistemas de derivación ventricular",
      "Cierre microquirúrgico de disrafismos espinales (espina bífida)",
      "Tratamiento quirúrgico de tumores infantiles del sistema nervioso"
    ],
    highlight: "Acceso a las tecnologías y técnicas más avanzadas, incluida la cirugía de invasión mínima con endoscopia."
  },
  {
    id: "neuroanestesiologia",
    number: 5,
    title: "Neuroanestesiología",
    subtitle: "Cuidado Perioperatorio Integral y Despertar Inmediato Controlado",
    shortDesc: "Amalgama de conocimientos en neurocirugía, neurología y neurorradiología para el cuidado perioperatorio.",
    fullDesc: "La Neuroanestesiología es una subespecialidad que amalgama conocimientos provenientes de la neurología, la neurocirugía, la neurorradiología y la anestesiología. Somos los expertos y el mejor complemento en el cuidado del paciente neurológico quirúrgico y no quirúrgico. Nuestras áreas de dominio abarcan el soporte y cuidado perioperatorio en la resección de tumores cerebrales, patología cerebrovascular, cirugía de columna, urgencias neurológicas, terapia endovascular neurológica, y otras áreas de neurorradiología. Estamos adiestrados en la utilización de fármacos y técnicas, donde el objetivo primordial es el despertar inmediato posterior a la cirugía, para una evaluación neurológica inmediata; hecho que impacta de forma positiva en el pronóstico neurológico.",
    iconSrc: "/wp-content/uploads/2024/07/1-1-e1721936123136.png",
    imageBg: "/images/Content/Captura de Pantalla 2021-10-27 a la(s) 22.07.06.png",
    galleryLayout: "grid-1x2",
    gallery: [
      { src: "/images/Content/Captura de Pantalla 2021-10-27 a la(s) 22.07.06.png" },
      { src: "/images/Content/5.jpeg" }
    ],
    conditions: [],
    procedures: [
      "Protocolos avanzados de neuroprotección cerebral farmacológica",
      "Anestesia total intravenosa (TIVA) guiada por índice biespectral (BIS)",
      "Monitoreo hemodinámico invasivo de presión arterial continua y perfusión",
      "Protocolo de despertar inmediato posterior a cirugía para valoración temprana",
      "Regulación estricta de la presión intracraneal (PIC) durante el acto quirúrgico"
    ],
    highlight: "Objetivo primordial: despertar inmediato posterior a cirugía para una evaluación neurológica inmediata con impacto positivo en el pronóstico."
  },
  {
    id: "neurofisiologia",
    number: 6,
    title: "Neurofisiología",
    subtitle: "Clínica, Diagnóstico y Monitorización Intraoperatoria",
    shortDesc: "Estudio de la función del sistema nervioso mediante técnicas fisiológicas y monitoreo intraoperatorio continuo.",
    fullDesc: "La neurofisiología clínica se encarga de estudiar la función y disfunción del sistema nervioso producida por enfermedades del cerebro, médula espinal, nervio periférico, músculo y órganos de los sentidos. Para ello se utilizan técnicas fisiológicas y de imagen para medir la actividad del sistema nervioso con fines diagnósticos, pronósticos y terapéuticos. Apoyamos en la Monitorización intraoperatoria en intervenciones quirúrgicas como: cirugía de la epilepsia, estimulación cerebral profunda en Parkinson, monitorización en cirugías cerebrales y de columna, cirugía de aneurismas, cirugía de nervios periféricos y nervios craneales.",
    iconSrc: "/wp-content/uploads/2024/07/2-1-e1721936182957.png",
    imageBg: "/images/Content/monitoreo transop.png",
    galleryLayout: "grid-1x2",
    gallery: [
      { src: "/images/Content/monitoreo transop.png" },
      { src: "/images/Content/Captura de Pantalla 2021-10-27 a la(s) 22.07.06.png" }
    ],
    conditions: [],
    procedures: [
      "Monitorización intraoperatoria continua (PEV, PEM, PESS, EMG transoperatoria)",
      "Electroencefalograma clínico digital (EEG)",
      "Electromiografía y velocidades de conducción nerviosa periférica (EMG)",
      "Potenciales evocados somatosensoriales, auditivos y visuales",
      "Mapeo cortical y estimulación de pares craneales en quirófano"
    ],
    highlight: "Preservación activa de la función nerviosa motora y sensitiva durante procedimientos neuroquirúrgicos."
  },
  {
    id: "terapiaintensiva",
    number: 7,
    title: "Terapia intensiva",
    subtitle: "Atención Crítica, Control y Monitorización Permanente",
    shortDesc: "Atención a pacientes en riesgo vital con equipo multidisciplinario altamente entrenado en procedimientos invasivos.",
    fullDesc: "También llamada atención crítica, en ella se brinda atención a pacientes que tienen alguna condición de salud que pone en riesgo la vida o función de algún organo y por tal razón necesitan control y monitorización permanente. Somos un equipo multidisciplinario, que estamos capacitados y altamente entrenados en la realización de procedimientos invasivos. La comunicación con nuestro equipo de trabajo (Neurocirujano y/o Terapista endovascular), y la adecuada planeación en cada procedimiento; son las piezas clave que nos han permitido obtener excelentes pronósticos en nuestros pacientes.",
    iconSrc: "/wp-content/uploads/2024/07/3-1-e1721936164573.png",
    imageBg: "/images/Content/terapia intensiva.png",
    galleryLayout: "grid-1x2",
    gallery: [
      { src: "/images/Content/terapia intensiva.png" },
      { src: "/images/Content/OK.jpeg" }
    ],
    conditions: [],
    procedures: [
      "Monitoreo invasivo multivariable de presión intracraneal (PIC) y perfusión cerebral",
      "Ventilación mecánica invasiva protectora neurocrítica",
      "Colocación de accesos vasculares guiados y soporte hemodinámico avanzado",
      "Protocolos de neuroreanimación guiada por metas y neuroprotección intensiva"
    ],
    highlight: "Comunicación estrecha con Neurocirujano y Terapista endovascular para garantizar excelentes pronósticos."
  }
];

export const reasonsToChoose: { title: string; desc: string; icon: string }[] = [
  {
    title: "Médicos Subespecialistas Certificados",
    desc: "Equipo con posgrados y credenciales de alta especialidad en las mejores instituciones del país e internacionales.",
    icon: "Award"
  },
  {
    title: "Tecnología de Mínima Invasión",
    desc: "Microcirugía, cateterismo endovascular y neuronavegación para incisiones menores y pronta reintegración.",
    icon: "Cpu"
  },
  {
    title: "Atención de Urgencias 24/7",
    desc: "Línea médica directa para atención oportuna en infartos cerebrales (código EVC) y traumatismos graves.",
    icon: "Clock"
  },
  {
    title: "Enfoque Multidisciplinario",
    desc: "Discusión colegiada de cada caso entre neurocirujanos, neurólogos, anestesiólogos y fisiólogos para el mejor plan.",
    icon: "Users"
  }
];

export interface DoctorCurriculumItem {
  area: string;
  sede: string;
  aval: string;
  cedula?: string;
  certificacion?: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  initials: string;
  photo?: string;
  doctoraliaUrl?: string;
  titulado?: {
    titulo: string;
    institucion: string;
    cedula?: string;
  };
  especialidades: DoctorCurriculumItem[];
  subespecialidades: DoctorCurriculumItem[];
  certificaciones: string[];
  membresias?: string[];
}

export interface ValueBase {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Institution {
  id: string;
  name: string;
  acronym: string;
  description: string;
  badgeColor: string;
  logo?: string;
}

export const medicalTeam: Doctor[] = [
  {
    id: "erick-ramos",
    name: "Dr. Erick Ramos Martínez",
    specialty: "Neurocirujano y Terapista Endovascular",
    initials: "ER",
    photo: "/images/doctors/dr_erick_ramos.png",
    doctoraliaUrl: "https://www.doctoralia.com.mx/perfil/erick-ramos-martinez",
    especialidades: [
      {
        area: "Neurocirugía",
        sede: "Centro Médico Nacional La Raza IMSS",
        aval: "Universidad Nacional Autónoma de México (UNAM)",
        cedula: "8404714"
      }
    ],
    subespecialidades: [
      {
        area: "Terapia Endovascular Neurológica",
        sede: "Instituto Nacional de Neurología y Neurocirugía",
        aval: "Universidad Nacional Autónoma de México (UNAM)",
        cedula: "09167607"
      }
    ],
    certificaciones: [
      "Consejo Mexicano de Cirugía Neurológica",
      "Capítulo de Terapia Endovascular del Consejo Mexicano de Cirugía Neurológica"
    ]
  },
  {
    id: "genny-arciniega",
    name: "Dra. Genny G. Arciniega Martínez",
    specialty: "Neuróloga y Neurofisióloga",
    initials: "GA",
    photo: "/images/doctors/dra_genny_arciniega.png",
    especialidades: [
      {
        area: "Neurología clínica",
        sede: "Instituto Nacional de Neurología y Neurocirugía",
        aval: "Universidad Nacional Autónoma de México (UNAM)"
      }
    ],
    subespecialidades: [
      {
        area: "Neurofisiología clínica",
        sede: "Hospital Español",
        aval: "Universidad Nacional Autónoma de México (UNAM)"
      }
    ],
    certificaciones: [
      "Consejo Mexicano de Neurología",
      "Consejo Mexicano de Neurofisiología"
    ]
  },
  {
    id: "jose-alfonso-franco",
    name: "Dr. José Alfonso Franco Jiménez",
    specialty: "Neurocirugía para adultos y pediátrica",
    initials: "JF",
    photo: "/images/doctors/dr_jose_franco.png",
    titulado: {
      titulo: "Médico Cirujano y Partero",
      institucion: "Facultad de Medicina, Universidad de Guadalajara (Jalisco)",
      cedula: "7583130"
    },
    especialidades: [
      {
        area: "Neurocirugía de adultos",
        sede: "Centro Médico Licenciado Adolfo López Mateos, ISEM, Toluca, Edo. Méx.",
        aval: "Universidad Autónoma del Estado de México (UAEM)",
        cedula: "11614871",
        certificacion: "1312"
      }
    ],
    subespecialidades: [
      {
        area: "Neurocirugía pediátrica",
        sede: "Hospital Infantil de México Federico Gómez (HIMFG), CDMX",
        aval: "Universidad Nacional Autónoma de México (UNAM)",
        cedula: "12348168",
        certificacion: "NP-86"
      }
    ],
    certificaciones: [
      "Consejo Mexicano de Cirugía Neurológica",
      "Certificación en Neurocirugía Pediátrica (NP-86)"
    ]
  },
  {
    id: "edgar-hernandez",
    name: "Dr. Edgar Alejandro Hernández Gómez",
    specialty: "Neuroanestesiología",
    initials: "EH",
    photo: "/images/doctors/dr_edgar_hernandez.png",
    especialidades: [
      {
        area: "Anestesiología",
        sede: "Centro Médico Nacional La Raza IMSS",
        aval: "Universidad Nacional Autónoma de México (UNAM)",
        cedula: "10646409"
      }
    ],
    subespecialidades: [
      {
        area: "Neuroanestesiología",
        sede: "Instituto Nacional de Neurología y Neurocirugía “Manuel Velasco Suárez”",
        aval: "Universidad Nacional Autónoma de México (UNAM)",
        cedula: "11594117"
      }
    ],
    certificaciones: [
      "Consejo Mexicano de Anestesiología",
      "Consejo Mexicano de Neuroanestesiología"
    ]
  },
  {
    id: "victor-cervantes",
    name: "Dr. Victor Hugo Cervantes López",
    specialty: "Medicina crítica",
    initials: "VC",
    photo: "/images/doctors/dr_victor_cervantes.png",
    especialidades: [
      {
        area: "Medicina Crítica",
        sede: "Centro Médico Nacional La Raza IMSS",
        aval: "Universidad Nacional Autónoma de México (UNAM)",
        cedula: "11694227"
      }
    ],
    subespecialidades: [],
    certificaciones: [
      "Consejo Mexicano de Medicina Crítica",
      "Consejo Mexicano de Medicina de Urgencias",
      "Certificado en ENLS (Emergency Neurological Life Support)",
      "Certificado en Soporte de Vida Extracorpóreo (ECMO / ECLS)"
    ],
    membresias: [
      "Miembro de la Sociedad Europea de Medicina Crítica (ESICM)"
    ]
  }
];

export const valoresBases: ValueBase[] = [
  {
    id: "experiencia",
    title: "Experiencia",
    description: "Con la experiencia para poder tratar su padecimiento ofreciendo técnicas de mínima invasión en enfermedades del cerebro y columna vertebral.",
    icon: "Brain"
  },
  {
    id: "profesional",
    title: "Profesional",
    description: "Todos los doctores colaboradores son certificados y avalados por las instituciones médicas más importantes y reconocidas del país.",
    icon: "Award"
  },
  {
    id: "seguridad",
    title: "Seguridad",
    description: "Priorizamos la integridad de nuestros pacientes mediante estrictos protocolos de neuroprotección, monitoreo transoperatorio en tiempo real y técnicas de mínima invasión para garantizar procedimientos de máxima precisión y seguridad.",
    icon: "ShieldCheck"
  }
];

export const endorsingInstitutions: Institution[] = [
  {
    id: "innn",
    name: "Instituto Nacional de Neurología y Neurocirugía",
    acronym: "INNN",
    description: "Instituto Nacional de Salud 'Manuel Velasco Suárez'",
    badgeColor: "border-blue-200 bg-blue-50/80 text-blue-900",
    logo: "/images/Content/INSTITUTO NACIONAL DE NEUROLOGIA Y NEUROCIRUGIA.png"
  },
  {
    id: "cmn-raza-neuro",
    name: "Centro Médico Nacional La Raza - Neurocirugía",
    acronym: "CMN La Raza",
    description: "Hospital de Especialidades Dr. Antonio Fraga Mouret, IMSS",
    badgeColor: "border-emerald-200 bg-emerald-50/80 text-emerald-900",
    logo: "/images/Content/CMN LA RAZA NEUROCIRUGIA.png"
  },
  {
    id: "himfg",
    name: "Hospital Infantil de México Federico Gómez",
    acronym: "HIMFG",
    description: "Instituto Nacional de Salud de Alta Especialidad Pediátrica",
    badgeColor: "border-rose-200 bg-rose-50/80 text-rose-900",
    logo: "/images/Content/HOSPITAL INFANTIL DE MEXICO.JPG"
  },
  {
    id: "hosp-espanol",
    name: "Hospital Español de México",
    acronym: "Hosp. Español",
    description: "Centro Hospitalario de Excelencia en Neurofisiología Clínica",
    badgeColor: "border-amber-200 bg-amber-50/80 text-amber-900",
    logo: "/images/Content/LOGO HOSP ESPAÑOL.jpeg"
  },
  {
    id: "cmn-raza-critica",
    name: "Centro Médico Nacional La Raza - Medicina Crítica",
    acronym: "Medicina Crítica",
    description: "Unidad de Cuidados Intensivos y Terapia Crítica, IMSS",
    badgeColor: "border-teal-200 bg-teal-50/80 text-teal-900",
    logo: "/images/Content/MEDICINA CRITICA LA RAZA.JPG"
  },
  {
    id: "unam",
    name: "Universidad Nacional Autónoma de México",
    acronym: "UNAM",
    description: "División de Estudios de Posgrado",
    badgeColor: "border-amber-200 bg-amber-50/80 text-amber-900",
    logo: "/images/Content/UNAM LOGO.png"
  },
  {
    id: "uaem",
    name: "Universidad Autónoma del Estado de México",
    acronym: "UAEM",
    description: "Facultad de Medicina y Aval Regional",
    badgeColor: "border-emerald-200 bg-emerald-50/80 text-emerald-900",
    logo: "/images/Content/Logo_de_la_UAEMex.svg"
  },
  {
    id: "udeg",
    name: "Universidad de Guadalajara",
    acronym: "UdeG",
    description: "Centro Universitario de Ciencias de la Salud",
    badgeColor: "border-blue-200 bg-blue-50/80 text-blue-900",
    logo: "/images/Content/Escudo_UdeG.svg"
  },
  {
    id: "isem",
    name: "Centro Médico Lic. Adolfo López Mateos",
    acronym: "ISEM",
    description: "Sede Hospitalaria de Alta Especialidad",
    badgeColor: "border-indigo-200 bg-indigo-50/80 text-indigo-900",
    logo: "/images/Content/722c6e072cb4e8928d0bb01e0f91865e.jpeg"
  }
];

export const faqs = [
  {
    q: "¿Cuándo debo acudir con un neurólogo o neurocirujano?",
    a: "Debe acudir ante síntomas como dolores de cabeza intensos o progresivos, pérdida de fuerza o sensibilidad en extremidades, convulsiones, mareos incapacitantes, temblores involuntarios, dolor crónico de cuello o espalda irradiado hacia piernas o brazos, o sospecha de infarto cerebral."
  },
  {
    q: "¿Qué estudios debo llevar a mi primera consulta?",
    a: "Se recomienda traer cualquier estudio previo relacionado: resonancias magnéticas (en disco o impresas), tomografías computadas, electroencefalogramas, análisis de laboratorio recientes y lista de medicamentos habituales."
  },
  {
    q: "¿Cómo se atiende una urgencia neurológica en CENNCA?",
    a: "Contamos con una línea directa de emergencias disponible las 24 horas: 55 3840 5419. Si sospecha de infarto cerebral (asimetría facial, debilidad en un brazo o dificultad para hablar), comuníquese de inmediato para activar el protocolo de neurointervención de urgencia."
  },
  {
    q: "¿Dónde están ubicados y cómo puedo agendar?",
    a: "Nos encontramos en el Centro Médico Toluca, Torre de Servicios Especializados, Consultorio 208, en Calle Pedro Ascencio 427, Metepec. Puede agendar al 722 232 6528, enviando un mensaje directo por WhatsApp o llenando el formulario en este sitio web."
  }
];
