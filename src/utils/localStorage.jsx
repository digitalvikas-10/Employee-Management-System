const  employees = [
    {
      "id": 1,
      "firstName": "Rahul",
      "name": "Rahul Sharma",
      "email": "rahul.sharma@example.com",
      "password": "123",
      "taskNumber": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Design Login Page",
          "taskDescription": "Create responsive login UI using React.",
          "taskDate": "2026-02-20",
          "category": "Frontend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Fix Navbar Bug",
          "taskDescription": "Resolve mobile responsiveness issue.",
          "taskDate": "2026-02-18",
          "category": "Bug Fix"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "API Integration",
          "taskDescription": "Connect frontend with authentication API.",
          "taskDate": "2026-02-19",
          "category": "Backend"
        }
      ]
    },
    {
      "id": 2,
      "firstName": "Priya",
      "name": "Priya Singh",
      "email": "priya.singh@example.com",
      "password": "123",
      "taskNumber": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Create Dashboard UI",
          "taskDescription": "Build employee dashboard layout.",
          "taskDate": "2026-02-21",
          "category": "Frontend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Optimize Images",
          "taskDescription": "Compress and optimize all assets.",
          "taskDate": "2026-02-17",
          "category": "Performance"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Write Unit Tests",
          "taskDescription": "Add Jest test cases for components.",
          "taskDate": "2026-02-22",
          "category": "Testing"
        }
      ]
    },
    {
      "id": 3,
      "firstName": "Amit",
      "name": "Amit Verma",
      "email": "amit.verma@example.com",
      "password": "123",
      "taskNumber": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Setup MongoDB",
          "taskDescription": "Configure MongoDB Atlas connection.",
          "taskDate": "2026-02-20",
          "category": "Database"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Implement Auth",
          "taskDescription": "Create login & register APIs.",
          "taskDate": "2026-02-15",
          "category": "Backend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Deploy App",
          "taskDescription": "Deploy project on Vercel.",
          "taskDate": "2026-02-19",
          "category": "Deployment"
        }
      ]
    },
    {
      "id": 4,
      "firstName": "Neha",
      "name": "Neha Patel",
      "email": "neha.patel@example.com",
      "password": "123",
      "taskNumber": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Create Admin Panel",
          "taskDescription": "Build admin management interface.",
          "taskDate": "2026-02-21",
          "category": "Frontend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Fix CSS Issues",
          "taskDescription": "Resolve layout shifting problems.",
          "taskDate": "2026-02-14",
          "category": "Bug Fix"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Add Filters",
          "taskDescription": "Implement task filtering feature.",
          "taskDate": "2026-02-22",
          "category": "Feature"
        }
      ]
    },
    {
      "id": 5,
      "firstName": "Vikas",
      "name": "Vikas Yadav",
      "email": "vikas.yadav@example.com",
      "password": "123",
      "taskNumber": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Setup Redux",
          "taskDescription": "Configure Redux for state management.",
          "taskDate": "2026-02-20",
          "category": "Frontend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Code Refactoring",
          "taskDescription": "Improve project folder structure.",
          "taskDate": "2026-02-16",
          "category": "Maintenance"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Payment Integration",
          "taskDescription": "Integrate Razorpay payment gateway.",
          "taskDate": "2026-02-18",
          "category": "Backend"
        }
      ]
    }
  ]


  const admin = [
    {
    "id": 101,
    "email": "admin@example.com",
    "password": "123"
  }
]

export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))
}


export const getLocalStorage = () => {
    const employees =  JSON.parse(localStorage.getItem("employees"))

    const admin =  JSON.parse(localStorage.getItem("admin"))
   return{employees,admin}
}

