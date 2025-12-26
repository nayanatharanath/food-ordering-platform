import Button from "@mui/material/Button"

export default function AppButton({ children, ...props }) {
    return (
        <Button variant="contained" sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }} {...props} >
            {children}
        </Button>
    )
}