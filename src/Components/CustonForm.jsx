import { Box, Button, Container, Grid, TextField, Switch, Typography } from "@mui/material";
import { useState } from "react";


function FormSimple() {
    const [checked, setChecked] = useState(true);

    const handleChecked = () => setChecked(!checked);

    return (
        <Box component="section" py={12}>
            <Container>

                <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
                    <Typography variant="h3" mb={1}>
                        Contact Us
                    </Typography>
                </Grid>


                <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
                    <Box width="100%" component="form" method="post" autocomplete="off">
                        <Box p={3}>

                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <TextField label="First Name" fullWidth sx={{ color: 'white' }} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField label="Last Name" fullWidth sx={{ color: 'white' }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="email" label="Email Address" fullWidth sx={{ color: 'white' }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Your Message" multiline fullWidth rows={6} sx={{ color: 'white' }} />
                                </Grid>
                            </Grid>

                            <Grid container item justifyContent="center" xs={12} my={2}>
                                <Button type="submit" variant="gradient" color="dark" fullWidth>
                                    Submit
                                </Button>
                            </Grid>

                        </Box>
                    </Box>
                </Grid>
            </Container>
        </Box>
    );
}

export default FormSimple;