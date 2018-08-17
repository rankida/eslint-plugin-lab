/**
 * @fileoverview Disallow .only for experiments and describes
 * @author David Rankin
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Disallow .only for experiments, test and describes",
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
            if(name == 'experiment' || name === 'describe'|| name === 'test' ) {
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
                    // covers the experiment.only() case
                    return ifExperimentReport(node.object.name, node);
                }

                if (node.object.object && node.object.object.name === 'lab' && node.object.property) {
                    // covers the lab.experiment.only() case
                    return ifExperimentReport(node.object.property.name, node);
                }
            }

        };
    }
};
