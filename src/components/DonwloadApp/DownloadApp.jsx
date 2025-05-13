import React from "react";
import { Box, Grid, Container } from "@mui/material";
import DownloadAppHeading from "./DownloadAppHeading";
import DownloadAppContent from "./DownloadAppContent";
import DownloadAppImage from "./DownloadAppImage";
import PhoneImage from "./PhoneImage";

const DownloadApp = () => {
  const title = "Download the app for the ultimate stress free planning experience";
  const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.";

  return (
    <Box component="section" sx={{pl:'102px'}}>
      <Container maxWidth="xl">
        <Grid container spacing={3} size={24} sx={{width:'100%'}}>
          <Grid xs={12} md={7.3} sx={{width:'50%'}}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                mt: 6
              }}
            >
              <DownloadAppHeading title={title} />
              <DownloadAppContent description={description} />
              <DownloadAppImage
                src="https://cdn.builder.io/api/v1/image/assets/1bd0c263abb24a15a0c26529824286fa/90f76e51829ae92d4fd48d4c206acbfcbfc77253?placeholderIfAbsent=true"
                alt="Download app badges"
              />
            </Box>
          </Grid>
          <Grid xs={12} md={4.7} sx={{position:'relative',width:'40%',display:{xxxs:'none',xxs:'none',xs:'none',sm:'none',md:'flex',lg:'flex',xl:'flex',xxl:"flex"},justifyContent:'flex-end'}}>
            {/* <PhoneImage
              src="https://cdn.builder.io/api/v1/image/assets/1bd0c263abb24a15a0c26529824286fa/e9ea7b5101ec911110c00965f869d3c6cd31c5bd?placeholderIfAbsent=true"
              alt="Mobile app preview"
            /> */}
            <img src="src/assets/Group 2085662728.png" style={{zIndex:'1',position:'relative'}} width={272} height={521}/>
            <img src="src/assets/Group 2085662729.png" style={{zIndex:'0',position:'absolute',left:'165px',top:'30px'}} height={477} width={248}/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DownloadApp;
