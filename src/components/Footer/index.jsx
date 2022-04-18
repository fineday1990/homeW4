import { Box, Container, Grid, Link, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
  <>
	<Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 3 }}
        bgcolor="primary.dark"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Account</Box>
              <Box>
                <Link href="/" color="inherit">
                  Login
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Messages</Box>
              <Box>
                <Link href="/" color="inherit">
                  Backup
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 3, sm: 5 }} pb={{ xs: 5, sm: 0 }}>
            @ YOU! &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
	</>
  );
};
