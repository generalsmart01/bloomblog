"use client"

const ThemeProvider = ({children}: {children: any}) => {

    const ThemeProvider: ({ children }: {
        children: any;
    }) => void

    const ThemeToggle: React.FC = () => {

        const { theme, setTheme } = useContext(ThemeContext)!;
        
        return (
            <div className={theme}>ThemeProvider</div>
        )
    }
}
 
export default ThemeProvider; 