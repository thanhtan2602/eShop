import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Home = () => {
    return (
        <div>
            <Container sx={{ py: 4 }}>
                <Typography variant="h4" component="h1" align="center" gutterBottom>
                    Welcome to My Simple E-commerce
                </Typography>
                <Typography variant="body1" align="center" paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed ipsum
                    neque. Maecenas vel turpis sed metus finibus eleifend. Integer gravida
                    erat a nunc convallis consectetur.
                </Typography>
                <Typography variant="body1" align="center" paragraph>
                    Phasellus auctor eros eu velit malesuada, ut eleifend justo rhoncus.
                    Vivamus nec dui nec sem fermentum aliquam nec non odio. Phasellus ac
                    fermentum metus, sit amet tincidunt est.
                </Typography>
            </Container>
        </div>
    );
};

export default Home;
