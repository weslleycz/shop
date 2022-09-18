import { TextField } from "@mui/material";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";
import { Head } from "./components/Head";
import { theme } from "./theme";

export interface PropsRecovery {
    title: string;
}

const recovery = ({ title }: PropsRecovery) => {
    const [error, setError] = React.useState(<></>);
    const handleSubmit = () => {
        setError(
            <Alert
                sx={{
                    width: "92.8%",
                    background: "#0edefa",
                }}
                severity="info"
            >
                This is an error alert — check it out!
            </Alert>
        );
    };
    return (
        <>
            <Head title={title}></Head>
            <ThemeProvider theme={theme}>
                <Container
                    sx={{
                        height: "100vh",
                    }}
                    maxWidth="sm"
                >
                    <Box
                        sx={{
                            marginTop: 4,
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: "bold",
                            }}
                            variant="h4"
                            gutterBottom
                        >
                            Criar nova senha
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: "#585858",
                            }}
                            gutterBottom
                        >
                            Sua nova senha deve ser diferente das senhas usadas
                            anteriormente.
                        </Typography>
                        <Box
                            component="form"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                mt: 1,
                            }}
                            noValidate
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Nova senha"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="confirm"
                                label="Confirme a senha"
                                type="password"
                                id="confirm"
                                autoComplete="current-password"
                            />
                            {error}
                            <Button
                                onClick={()=>handleSubmit()}
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, fontWeight: "bold" }}
                            >
                                Redefinir senha
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
};

export default recovery;
