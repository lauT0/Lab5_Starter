// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//phone tests
test('valid phone number XXX-XXX-XXXX format', () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test('valid phone number (XXX)XXX XXXX format', () => {
  expect(isPhoneNumber("(123)456-7890")).toBe(true);
});

test('invalid phone number with characters', () => {
  expect(isPhoneNumber("(123) 456-abcd")).toBe(false);
});

test('invalid phone number with no spaces', () => {
  expect(isPhoneNumber("1234567890")).toBe(false);
});

//email tests
test('valid email w', () => {
  expect(isEmail("someoneCool123@gmail.com")).toBe(true);
});

test('valid email edu', () => {
  expect(isEmail("strange__Prof@ucsd.edu")).toBe(true);
});

test('invalid email spaces', () => {
  expect(isEmail("strange Prof@ucsd.edu")).toBe(false);
});

test('invalid email org', () => {
  expect(isEmail("strange_Prof@ucsd.nept")).toBe(false);
});

//password tests
test('valid password', () => {
  expect(isStrongPassword("password")).toBe(true);
});

test('valid password with digits and underscores', () => {
  expect(isStrongPassword("pass123_word")).toBe(true);
});

test('invalid password with symbols', () => {
  expect(isStrongPassword("pass123_word!")).toBe(false);
});

test('invalid password length', () => {
  expect(isStrongPassword("pw")).toBe(false);
});

//date:
test('valid date', () => {
  expect(isDate("1/23/2023")).toBe(true);
});

test('valid date2', () => {
  expect(isDate("11/2/2003")).toBe(true);
});

test('invalid date characters', () => {
  expect(isDate("1a/2/2003")).toBe(false);
});

test('invalid date length', () => {
  expect(isDate("10/2/23")).toBe(false);
});

//hex:
test('valid hex 3 digit', () => {
  expect(isHexColor("#1FF")).toBe(true);
});

test('valid hex 6 digit', () => {
  expect(isHexColor("1F1F1F")).toBe(true);
});

test('invalid hex len', () => {
  expect(isHexColor("#1F1F1F1F")).toBe(false);
});

test('invalid hex symbols', () => {
  expect(isHexColor("#123_fs")).toBe(false);
});





