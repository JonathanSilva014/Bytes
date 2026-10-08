type Course = {
    title: string;
    hours: number;
};
const jsonText = `{"title": "TypeScript Avançado", "hours": 20}`
const course: Course = JSON.parse(jsonText) as Course

console.log(course.title)
console.log(course.hours)

export {}