/**
 * @fileoverview Disallow .only for experiments and describes
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
        'lab.experiment',
        'lab.test',
        'experiment("valid", function() {})',
        'test("valid", function() {})',
        'only("some other func")'
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
            code: "experiment.only('describe something', function() { });",
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
            code: "describe.only('describe something', function() { });",
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
            code: "test.only('describe something', function() { });",
            errors: [{
                message: "test should not be marked as only",
                type: "MemberExpression"
            }]
        }
    ]
});
