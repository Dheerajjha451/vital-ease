export const registrationFormControls=[
    {
        id:'name',
        type:'text',
        placeholder:'Enter your name',
        label:'Name',
        componentType:'input'
    },
    {
        id:'email',
        type:'email',
        placeholder:'Enter your email',
        label:'Email',
        componentType:'input'
    },
    {
        id:'password',
        type:'password',
        placeholder:'Enter your password',
        label:'Password',
        componentType:'input'
    },
    
]

export const loginFormControls=[
    {
        id:'email',
        type:'email',
        placeholder:'Enter your email',
        label:'Email',
        componentType:'input'
    },
    {
        id:'password',
        type:'password',
        placeholder:'Enter your password',
        label:'Password',
        componentType:'input'
    },
    {
        id: "role",
        type: "",
        placeholder: "",
        label: "Role",
        componentType: "select",
        options: [
        {
        id: "Guardian",
        label: "Guardian",
        },
        {
        id: "Elderly",
        label: "Elderly",
        },
        {
        id: "CareGivers",
        label: "Care Givers",
        },
    ],
    },
]