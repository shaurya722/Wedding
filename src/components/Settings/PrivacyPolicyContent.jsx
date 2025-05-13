import { Paper, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
 
const ContentPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  paddingBottom: theme.spacing(6),
  marginBottom: theme.spacing(24),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
}));
 
const PrivacyPolicyContent = () => {
  return (
    <Box sx={{ flex: 1 }}>
      <ContentPaper elevation={0}>
        <Typography variant="h2" sx={{ color: 'neutral.900', mb: 1 }}>
          Privacy Policy
        </Typography>
        <Typography variant="body1" sx={{ color: 'grey.400', mt: 1.5 }}>
          Last update: February 23, 2022
        </Typography>
        <Typography variant="body1" sx={{ color: 'neutral.900', mt: 4, lineHeight: 1.75 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of
          Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply
          random text. It has roots in a piece of classical Latin literature
          from 45 BC, making it over 2000 years old. Richard McClintock, a
          Latin professor at Hampden-Sydney College in Virginia, looked up
          one of the more obscure Latin words, consectetur, from a Lorem
          Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem
          Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
          Bonorum et Malorum" (The Extremes of Good and Evil) by
          Cicero, written in 45 BC.
        </Typography>
        <Typography variant="h2" sx={{ color: 'neutral.900', mt: 4, mb: 2 }}>
          The short version
        </Typography>
        <Typography variant="body1" sx={{ color: 'neutral.900', lineHeight: 1.75 }}>
          "But I must explain to you how all this mistaken idea of
          denouncing pleasure and praising pain was born and I will give you
          a complete account of the system, and expound the actual teachings
          of the great explorer of the truth, the master-builder of human
          happiness. No one rejects, dislikes, or avoids pleasure itself,
          because it is pleasure, but because those who do not know how to
          pursue pleasure rationally encounter consequences that are
          extremely painful. Nor again is there anyone who loves or pursues
          or desires to obtain pain of itself, because it is pain.
        </Typography>
      </ContentPaper>
    </Box>
  );
};
 
export default PrivacyPolicyContent;