export const generalConstants = {
  title_inter: <h1>Título con interpolación</h1>,
};

export const MenuConstants = {
   home: 'Inicio',
   form: 'Formularios',
   routes: 'Rutas',
   about: 'Acerca de ...',
   hook: 'Hooks',
   utility: 'Utilidades',
   material: 'Material UI',
   storage: 'Almacenamiento',
};

export const formConstants = {
  validate: "",
  text: "Inserta usuario y contraseña",
  icon: "warning",
  iconSuccess: "success",
  titleAtention: "Atención",
  titleOk: "OK",
  titleMissing: "Te faltó un campo",
  textMissing: "Inserta el elemento faltante",
  textMail: "Correo inválido",
  textPassRequired: "Contraseña obligatoria",
  textPass: "El correo es obligatorio",
  textMailChar:
    "Debe tener 8 caracteres, mayúscula, minúscula, número y símbolo",
  emailRegex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  passwordRegex:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};

export const hookConstants = {
  hookLink: "/hooks",
  hookTitle: "Hooks",
  hookContextDesc: "useContext",
};

export const matConstants = {
  matLink: "/material",
  matTitle: "Material",
  matListDescription: "Material List",
  matDrawerDescription: "Material Drawer",
  matTablesDescription: "Material Tables - Data Grid",
  matAccordionDescription: "Material Accordion",
  matStepperDescription: "Material Stepper",
  matTabsDescription: "Material Tabs",
  matDialogDescription: "Material Dialog",
  matCardDescription: "Material Card",
  matAutoDescription: "Material Autocomplete",
  matDateDescription: "Material Autocomplete",
};

export const storageConstants = {
  storageLink: "/storage",
  storageTitle: "Almacenamiento",
  storageLocalDesc: "Local Storage",
  storageSessionDesc: "Session Storage",
};
