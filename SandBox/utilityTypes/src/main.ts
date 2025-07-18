interface Assignment {
  level: number;
  grade: number;
  dept: string;
  title: string;
  verified?: boolean;
}

interface Student {
  name: string;
  age: number;
  gender: string;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Student>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1 = {
  level: 200,
  grade: 0,
  title: "Econometrics",
  dept: "Statistics",
};

console.log(updateAssignment(assign1, { age: 32 }));
