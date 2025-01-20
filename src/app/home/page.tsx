"use client";
import { Avatar, Box, Container, Link, Stack, Typography } from "@mui/material";
import profilePic from "../../assets/profilePic.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import curriculo from "../../assets/curriculo.png";
import Bg from "../../assets/lemon.jpg";

export default function Home() {
  return (
    <Container fixed>
      <Box
        sx={{
          width: "100%",
          height: 150,
          backgroundImage: `url(${Bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderStartEndRadius: 30,
          borderEndEndRadius: 30,
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          backgroundColor: "primary.light",
        }}
      >
        <Stack
          direction="row"
          spacing={4}
          sx={{
            margin: 10,
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={`${profilePic.src}`}
            sx={{ width: 300, height: 300 }}
          />
          <Stack spacing={2}>
            <Typography variant="h4" color="secondary.dark">
              Ola me chamo Isabele Lima
            </Typography>
            <Typography variant="subtitle1" color="secondary.dark">
              Sou desenvolvedora Web, Tecnica de informatica e atualmente
              graduanda em Ciência da Computação. Tenho experiencias de trabalho
              com back-end e front-end com linguagens e tecnologias voltadas
              para JavaScript/ TypeScript. Em relação a banco de dados ja
              utilizei postgres, mySql e MongoDB com experiencia em modelagem de
              bancos relacionais. Alem disso tenho conhecimentos basicos com
              ferramentas como: Figma, photoshop, coreldraw, AWS Storage.
              Atualmente busco aumentar minha network dentro do mercado de
              trabalho e expandir meus conhecimentos na área buscando sempre
              novas oportunidades de amprender e crescer profissionalmente.
            </Typography>
          </Stack>
        </Stack>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 3,
            backgroundColor: "primary.dark",
          }}
        >
          <Typography
            variant="h6"
            color="white"
            sx={{
              marginBottom: 5,
            }}
          >
            Conheca mais sobre mim
          </Typography>

          <Stack direction="row" spacing={5}>
            <Link
              href="https://github.com/isabeleLima"
              target="_blank"
              rel="noopener"
              sx={{
                textDecoration: "none",
              }}
            >
              <Avatar
                src={`${github.src}`}
                sx={{
                  width: 150,
                  height: 150,
                  "&:hover": {
                    transform: "scale(1.1)",
                    transition: "transform 0.3s ease-in-out",
                  },
                }}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/isabele-lima-9991b514a/"
              target="_blank"
              rel="noopener"
              sx={{
                textDecoration: "none",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={`${linkedin.src}`}
                sx={{
                  width: 150,
                  height: 150,
                  "&:hover": {
                    transform: "scale(1.1)",
                    transition: "transform 0.3s ease-in-out",
                  },
                }}
              />
            </Link>
            <Link
              href="/Profile.pdf"
              download="isabeleLimaCurriculo.pdf"
              target="_blank"
              sx={{
                textDecoration: "none",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={`${curriculo.src}`}
                sx={{
                  width: 150,
                  height: 150,
                  "&:hover": {
                    transform: "scale(1.1)",
                    transition: "transform 0.3s ease-in-out",
                  },
                }}
              />
            </Link>
          </Stack>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "100vh",
            backgroundImage: `url(${Bg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderStartEndRadius: 30,
            borderEndEndRadius: 30,
          }}
        ></Box>
      </Box>
    </Container>
  );
}
