import { Box, Stack, Typography} from "@mui/material";
import { Link } from "react-router-dom";

interface HeaderProps {
    showHeader?: boolean;
}

const Header = ({showHeader}: HeaderProps) => {
    return (
        <Box 
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                backgroundImage: `radial-gradient(
                    circle,
                    rgba(255, 255, 255, 0) 0%,
                    rgba(0, 0, 0, 1) 100%
                  )`,
                backgroundSize: '4px 4px',
                zIndex: (theme) => theme.zIndex.drawer + 1,
                backdropFilter: 'blur(3px)',
                WebkitBackdropFilter: 'blur(3px)',
                MozBackdropFilter: 'blur(px)',
                justifyContent: 'flex-start',
                opacity: showHeader ? 1 : 0,
                transition: "opacity 0.3s ease-out",
                '&::before': {
                  display: 'block',
                  content: '""',
                  position: 'absolute',
                  top: '-1px',
                  left: 0,
                  height: '1px',
                  background: 'white',
                  opacity: 0.2,
                },
            }}>
            <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={0}
                sx={{
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    pt: 4,
                    px: 10,
                }}
            >
                <Typography variant="h2" gutterBottom>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Goutham Akula
                    </Link>
                </Typography>
            </Stack>
        </Box >
    );
};

export default Header;