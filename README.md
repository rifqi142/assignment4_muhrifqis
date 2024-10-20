# 📓 Course Management Application📓

A web-based course management application built with _Express.js, Sequelize ORM, and MySQL_. The application allows users to add courses, manage course schedules, create user accounts, and perform authentication (registration and login). It uses bcrypt for password encryption, Joi for data validation, and cookie-parser for handling cookies.

## 🧑🏻‍💻 Author

- [@Muhammad Rifqi Setiawan](https://github.com/rifqi142)

## 🚀 Technologies

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Sequelize ORM](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [Joi](https://www.npmjs.com/package/joi)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)

## 📚 Features

- User Management

  - User registration and login
  - Update and delete user account

- Course Management

  - Add new course
  - Update and delete course
  - View course details

- Schedule Management

  - Add new schedule
  - Update and delete schedule
  - View schedule details

- Course Enrollment

  - Enroll in a course
  - View enrolled courses

- Authentication
  - Password encryption
  - Data validation
  - Cookie handling

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/rifqi142/assignment4_muhrifqis
```

### 2. Navigate to the project directory

```bash
cd course-management-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Set up the database

- Create a new MySQL database and update the database configuration in the `config/config.json` file.

### 5. Run migrations and seed the database:

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

### 6. Start the server

```bash
npm start
```

The server will start on `http://localhost:3000`.

## 🌐 API Endpoints

### Authentication:

| Method | Endpoint       | Description         |
| ------ | -------------- | ------------------- |
| POST   | /auth/register | Register a new user |
| POST   | /auth/login    | Login user          |
| POST   | /auth/logout   | Logout user         |

### User Management:

| Method | Endpoint              | Description             |
| ------ | --------------------- | ----------------------- |
| GET    | /user                 | Get all users           |
| GET    | /user/:id             | Get user by ID          |
| PUT    | /user/:id             | Update user             |
| DELETE | /user/soft-delete/:id | Soft Delete Delete user |
| DELETE | /user/:id             | Delete user             |

### Course Management:

| Method | Endpoint                | Description        |
| ------ | ----------------------- | ------------------ |
| GET    | /course                 | Get all courses    |
| GET    | /course/:id             | Get course by ID   |
| POST   | /course                 | Add new course     |
| PUT    | /course/:id             | Update course      |
| DELETE | /course/soft-delete/:id | Soft Delete Course |
| DELETE | /course/:id             | Delete course      |

### Schedule Management:

| Method | Endpoint                  | Description          |
| ------ | ------------------------- | -------------------- |
| GET    | /schedule                 | Get all schedules    |
| GET    | /schedule/:id             | Get schedule by ID   |
| POST   | /schedule                 | Add new schedule     |
| PUT    | /schedule/:id             | Update schedule      |
| DELETE | /schedule/soft-delete/:id | Soft Delete Schedule |
| DELETE | /schedule/:id             | Delete schedule      |

### Course Schedule Management:

| Method | Endpoint             | Description               |
| ------ | -------------------- | ------------------------- |
| GET    | /course-schedule     | Get all course schedules  |
| GET    | /course-schedule/:id | Get course schedule by ID |
| POST   | /course-schedule     | Add new course schedule   |
| PUT    | /course-schedule/:id | Update course schedule    |
| DELETE | /course-schedule/:id | Delete Course Schedule    |

### User Course Management:

| Method | Endpoint         | Description           |
| ------ | ---------------- | --------------------- |
| GET    | /user-course     | Get all user courses  |
| GET    | /user-course/:id | Get user course by ID |
| POST   | /user-course     | Add new user course   |
| PUT    | /user-course/:id | Update user course    |
| DELETE | /user-course/:id | Delete user course    |

# 📝 Sample Response for User Management

```bash

{
  "us_id": 1,
  "us_username": "rifqi142",
  "us_fullname": "Muh Rifqi",
  "us_email": "muhrifqi@gmail.com",
  "us_phone_number": "08122554478",
  "us_is_active": true,
  "userCourses": [
    {
      "uc_id": 4,
      "course": {
        "cr_id": 4,
        "cr_name": "Machine Learning",
        "cr_code": "ML",
        "cr_trainer": "Darwin Prakoso",
        "courseSchedules": [
          {
            "cs_id": 4,
            "schedule": {
              "sc_date": "2024-10-16T00:00:00.000Z",
              "sc_start_time": "15:00:00",
              "sc_end_time": "17:00:00"
            }
          }
        ]
      }
    },
    {
      "uc_id": 3,
      "course": {
        "cr_id": 3,
        "cr_name": "Data Science",
        "cr_code": "DS",
        "cr_trainer": "Fadlan Amrullah",
        "courseSchedules": [
          {
            "cs_id": 3,
            "schedule": {
              "sc_date": "2024-10-16T00:00:00.000Z",
              "sc_start_time": "13:00:00",
              "sc_end_time": "15:00:00"
            }
          }
        ]
      }
    }
  ]
}

```

# 📝 Sample Response for Course Management

```bash

{
  "cr_id": 1,
  "cr_name": "Web Development",
  "cr_code": "WD",
  "cr_trainer": "Rifqi Setiawan",
  "courseSchedules": [
    {
      "cs_id": 1,
      "schedule": {
        "sc_date": "2024-10-16T00:00:00.000Z",
        "sc_start_time": "09:00:00",
        "sc_end_time": "11:00:00"
      }
    }
  ]
}

```

# 📝 Sample Response for Schedule Management

```bash

{
  "sc_id": 1,
  "sc_date": "2024-10-16T00:00:00.000Z",
  "sc_start_time": "09:00:00",
  "sc_end_time": "11:00:00"
}

```

# 📝 Sample Response for Course Schedule Management

```bash

{
  "cs_id": 1,
  "course": {
    "cr_id": 1,
    "cr_name": "Web Development",
    "cr_code": "WD",
    "cr_trainer": "Rifqi Setiawan"
  },
  "schedule": {
    "sc_id": 1,
    "sc_date": "2024-10-16T00:00:00.000Z",
    "sc_start_time": "09:00:00",
    "sc_end_time": "11:00:00"
  }
}

```

## 💡 Usage

You can test the API using tools like [Postman](https://www.postman.com/) or cURL. Make sure to send requests with the appropriate HTTP methods and payloads as described in the API endpoints section. I have included a Postman collection in the `postman` folder for your convenience.

## 📜 License

This project is licensed under the MIT License.
