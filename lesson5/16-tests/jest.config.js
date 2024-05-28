module.exports = {
  testEnvironment: 'node', // Визначає середовище, яке використовується для тестування

  // Вказує, де Jest повинен шукати тестові файли
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)', // Шукає файли всередині папок __tests__
    '**/?(*.)+(spec|test).[jt]s?(x)' // Шукає файли з .spec.js, .test.js, .spec.jsx, .test.jsx
  ]
}

