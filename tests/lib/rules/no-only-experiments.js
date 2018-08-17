/**
 * @fileoverview Disallow .only for experiments, describes, tests, and it
 * @author no-only-experiments
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-only-experiments"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-only-experiments", rule, {

    valid: [
        'lab.experiment("valid", function() {})',
        'lab.test("valid", function() {})',
        'lab.describe("valid", function() {})',
        'lab.it("valid", function() {})',
        'lab.experiment',
        'lab.test',
        'lab.describe',
        'lab.it',
        'experiment("valid", function() {})',
        'test("valid", function() {})',
        'describe("valid", function() {})',
        'it("valid", function() {})',
        'only("some other func")',
        'experiment',
        'test',
        'describe',
        'it'
    ],

    invalid: [
        {
            code: "lab.experiment.only('describe something', function() { });",
            errors: [{
                message: "experiment should not be marked as only",
                type: "MemberExpression"
            }]
        },
        {
            code: "lab.experiment.only",
            errors: [{
                message: "experiment should not be marked as only",
                type: "MemberExpression"
            }]
        },
        {
            code: "experiment.only('describe something', function() { });",
            errors: [{
                message: "experiment should not be marked as only",
                type: "MemberExpression"
            }]
        },
        {
            code: "experiment.only",
            errors: [{
                message: "experiment should not be marked as only",
                type: "MemberExpression"
            }]
        },
        {
            code: "lab.describe.only('describe something', function() { });",
            errors: [{
                message: "describe should not be marked as only",
                type: "MemberExpression"
            }]
        },
        {
            code: "lab.describe.only",
            errors: [{
                message: "describe should not be marked as only",
                type: "MemberExpression"
            }]
        },
        {
            code: "describe.only('describe something', function() { });",
            errors: [{
                message: "describe should not be marked as only",
                type: "MemberExpression"
            }]
        },
        {
            code: "describe.only",
            errors: [{
                message: "describe should not be marked as only",
                type: "MemberExpression"
            }]
        },
        {
            code: "lab.test.only('describe something', function() { });",
            errors: [{
                message: "test should not be marked as only",
                type: "MemberExpression"
            }]
        },
        {
            code: "lab.test.only",
            errors: [{
                message: "test should not be marked as only",
                type: "MemberExpression"
            }]
        },
        {
            code: "test.only('describe something', function() { });",
            errors: [{
                message: "test should not be marked as only",
                type: "MemberExpression"
            }]
        },
        {
            code: "test.only",
            errors: [{
                message: "test should not be marked as only",
                type: "MemberExpression"
            }]
        },
        {
            code: "lab.it.only('describe something', function() { });",
            errors: [{
                message: "it should not be marked as only",
                type: "MemberExpression"
            }]
        },
        {
            code: "lab.it.only",
            errors: [{
                message: "it should not be marked as only",
                type: "MemberExpression"
            }]
        },
        {
            code: "it.only('describe something', function() { });",
            errors: [{
                message: "it should not be marked as only",
                type: "MemberExpression"
            }]
        },
        {
            code: "it.only",
            errors: [{
                message: "it should not be marked as only",
                type: "MemberExpression"
            }]
        }
    ]
});
