const handleThemeToggle = () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
    } else {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
    }
};

export default handleThemeToggle;