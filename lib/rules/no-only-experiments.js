/**
 * @fileoverview Disallow .only for experiments, describes, tests, and it
 * @author David Rankin
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Disallow .only for experiments, describes, tests and it",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        function ifExperimentReport(name, node) {
            if(name == 'experiment' || name === 'describe'|| name === 'test'|| name === 'it' ) {
                context.report(node, `${name} should not be marked as only`);
            }
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            MemberExpression: function(node) {
                debugger;
                if (node.property.name !== 'only' || !node.object) {
                    return;
                }

                if (node.object.name) {
                    // covers experiment.only(), describe.only(), test.only() and it.only() cases
                    return ifExperimentReport(node.object.name, node);
                }

                if (node.object.object && node.object.object.name === 'lab' && node.object.property) {
                    // covers lab.experiment.only(), lab.describe.only(), lab.test.only() and lab.it.only() cases
                    return ifExperimentReport(node.object.property.name, node);
                }
            }

        };
    }
};
