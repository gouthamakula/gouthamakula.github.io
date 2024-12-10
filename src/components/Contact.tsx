import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Button } from '@mui/material';
import { Box } from "@mui/system";

const contacts = [
    { icon: LinkedInIcon, href: "https://www.linkedin.com/in/goutham-akula-profile/" },
    { icon: GitHubIcon, href: "https://github.com/gouthamakula" },
    { icon: EmailIcon, href: "mailto:goutham.akula3@gmail.com" },
    { icon: PhoneIcon, href: "tel:+91 6300561374" }
]


const Contact = () => {
    return (
        <Box sx={{position: "absolute", bottom: 0}}>
            {
                contacts.map(({ icon: SvgIcon, href }, index) => (
                    <Button 
                        key={index}
                        target="_blank"
                        href={href}
                        sx={{ 
                            color: "grey.600",
                            "&:hover": {
                                color: "grey.100"
                            }
                        }}
                    >
                        <SvgIcon />
                    </Button>
                )
                )
            }
        </Box>
    );
};

export default Contact;