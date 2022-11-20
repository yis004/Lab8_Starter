// unit.test.js
const sum = require('../code-to-unit-test/unit-test-me.js');

const functions = require('../code-to-unit-test/unit-test-me.js');

test('Testing isPhoneNumber correctness', () => {
    expect(functions.isPhoneNumber("703-678-9758")).toBe(true);
  });

test('Testing isEmail correctness', () => {
expect(functions.isEmail("jinyuqilin1@gmail.com")).toBe(true);
});

test('Testing isStrongPassword correctness', () => {
    expect(functions.isStrongPassword("tmnxMLUD4yZrB6")).toBe(true);
});

test('Testing isDate correctness', () => {
    expect(functions.isDate("34/53/2832")).toBe(true);
});

test('Testing isHexColor correctness', () => {
    expect(functions.isHexColor("#aA90ea")).toBe(true);
});

test('Testing isPhoneNumber correctness', () => {
    expect(functions.isPhoneNumber("888-678-9759")).toBe(true);
  });

test('Testing isEmail correctness', () => {
expect(functions.isEmail("abc@gmail.cam")).toBe(true);
});

test('Testing isStrongPassword correctness', () => {
    expect(functions.isStrongPassword("sdflMMUD4yZrB6")).toBe(true);
});

test('Testing isDate correctness', () => {
    expect(functions.isDate("11/11/1111")).toBe(true);
});

test('Testing isHexColor correctness', () => {
    expect(functions.isHexColor("#BB11AA")).toBe(true);
});


//False below


test('Testing isPhoneNumber correctness', () => {
    expect(functions.isPhoneNumber("7011")).toBe(true);
  });

test('Testing isEmail correctness', () => {
expect(functions.isEmail("fd.com")).toBe(true);
});

test('Testing isStrongPassword correctness', () => {
    expect(functions.isStrongPassword("123")).toBe(true);
});

test('Testing isDate correctness', () => {
    expect(functions.isDate("34532832")).toBe(true);
});

test('Testing isHexColor correctness', () => {
    expect(functions.isHexColor("#1231")).toBe(true);
});

test('Testing isPhoneNumber correctness', () => {
    expect(functions.isPhoneNumber("8")).toBe(true);
  });

test('Testing isEmail correctness', () => {
expect(functions.isEmail("abcgmail.cam")).toBe(true);
});

test('Testing isStrongPassword correctness', () => {
    expect(functions.isStrongPassword("dfd")).toBe(true);
});

test('Testing isDate correctness', () => {
    expect(functions.isDate("11111111")).toBe(true);
});

test('Testing isHexColor correctness', () => {
    expect(functions.isHexColor("##dkfjskd")).toBe(true);
});
