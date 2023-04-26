interface NavItem {
    path: string,
    title: string,
    icon?: string,
}

const links: NavItem[] = [
    {
        path: 'home',
        title: 'Home',
        icon: 'home',
    },
    {
        path: 'students',
        title: 'Alumnos',
        icon: 'school' 
    },
    {
        path: 'courses',
        title: 'Cursos',
        icon: 'grading',
    },
    {
        path: 'inscriptions',
        title: 'Comisiones',
        icon: 'hive'
    }
];

export default links;