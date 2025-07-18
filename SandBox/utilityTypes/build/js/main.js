"use strict";
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    level: 200,
    grade: 0,
    title: "Econometrics",
    dept: "Statistics",
};
console.log(updateAssignment(assign1, { age: 32 }));
