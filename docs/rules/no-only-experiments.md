# Disallow .only for experiments and describes (no-only-experiments)

Please describe the origin of the rule here.


## Rule Details

This rule aims to stop accidentally committing/pushing `.only` experiments.

Examples of **incorrect** code for this rule:

```js

experiment.only('A test block', () => {

});

lab.describe.only('Test description', () => {

});

```

This rule will catch uses of `describe` as well as `experiment` that are marked as `only()`, with or without the source `lab` object.
