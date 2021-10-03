-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-10-2021 a las 03:20:22
-- Versión del servidor: 10.4.8-MariaDB
-- Versión de PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `disney_personajes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `generos`
--

CREATE TABLE `generos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `generos`
--

INSERT INTO `generos` (`id`, `nombre`, `imagen`, `createdAt`, `updatedAt`) VALUES
(1, 'Romance', '  ', '2021-10-01 19:56:29', '2021-10-01 19:56:29'),
(2, 'Drama', '  ', '2021-10-01 19:56:29', '2021-10-01 19:56:29'),
(3, 'Accion', '  ', '2021-10-01 19:56:29', '2021-10-01 19:56:29'),
(4, 'Comedia', '  ', '2021-10-01 19:56:29', '2021-10-01 19:56:29'),
(5, 'Aventuras', '  ', '2021-10-01 19:56:29', '2021-10-01 19:56:29');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculasseries`
--

CREATE TABLE `peliculasseries` (
  `id` int(11) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `imagen` varchar(100) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `calificacion` int(11) NOT NULL,
  `genero_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `peliculasseries`
--

INSERT INTO `peliculasseries` (`id`, `titulo`, `imagen`, `fecha_creacion`, `calificacion`, `genero_id`, `createdAt`, `updatedAt`) VALUES
(8, 'Cenicienta', '4444444444444444444444', '1970-01-05 03:00:00', 5, 2, '2021-10-01 20:06:27', '2021-10-02 19:33:13');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personajes`
--

CREATE TABLE `personajes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `edad` int(11) NOT NULL,
  `peso` double NOT NULL,
  `historia` varchar(100) NOT NULL,
  `imagen` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `personajes`
--

INSERT INTO `personajes` (`id`, `nombre`, `edad`, `peso`, `historia`, `imagen`, `createdAt`, `updatedAt`) VALUES
(1, 'Cenicienta', 16, 45, '10000', 'aaaaaaaaaaaaaaa55555555555555555555aaaaaaaa', '2021-10-01 19:59:11', '2021-10-02 18:16:06'),
(2, 'Blancanieves', 19, 45, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaaaaaaaaaaaa', '2021-10-01 19:59:36', '2021-10-01 19:59:36');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personajespeliculasseries`
--

CREATE TABLE `personajespeliculasseries` (
  `id` int(11) NOT NULL,
  `personaje_id` int(11) NOT NULL,
  `peliculasSeries_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizedata`
--

CREATE TABLE `sequelizedata` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sequelizedata`
--

INSERT INTO `sequelizedata` (`name`) VALUES
('20211001004655-create-generos.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20210928215634-user.js'),
('20210928232019-create-generos.js'),
('20210928233943-create-personajes.js'),
('20210928235506-create-peliculas-series.js'),
('20210928235554-create-personajes-peliculas-series.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'silviperez', 'silvi8794@gmail,com', '$2b$10$pqBI/DzhiPHN0a9wT7UA8uwsKKiBxXFViSkfW/IJWAFY/nD5jTOia', '2021-10-03 00:44:37', '2021-10-03 00:44:37'),
(6, 'perezsilviaandrea', 'silvi8794@gmail.com', '$2b$10$jlBPWBqtOZ6YmCGdWybT0OoHag8a6kvuvu770qsxQtSg9FRGL.r86', '2021-10-03 00:51:53', '2021-10-03 00:51:53'),
(7, 'alexis', 'alexislagarde@hotmail.com', '$2b$10$cum5ha5GvFT0C9RihVuTEuufZjJ9DbRNOmyOXy5TOLjhW1h8V.Xba', '2021-10-03 00:55:56', '2021-10-03 00:55:56'),
(8, 'alexis123', 'alexislagarde@gmail.com', '$2b$10$c089c3zpWwZQ6BvVfyqk9eF4BkLKr3nyvZLFS0Wtg6Mv4jZbkAEtG', '2021-10-03 00:56:05', '2021-10-03 00:56:05');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `generos`
--
ALTER TABLE `generos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `peliculasseries`
--
ALTER TABLE `peliculasseries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `genero_id` (`genero_id`);

--
-- Indices de la tabla `personajes`
--
ALTER TABLE `personajes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `personajespeliculasseries`
--
ALTER TABLE `personajespeliculasseries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `personaje_id` (`personaje_id`),
  ADD KEY `peliculasSeries_id` (`peliculasSeries_id`);

--
-- Indices de la tabla `sequelizedata`
--
ALTER TABLE `sequelizedata`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `generos`
--
ALTER TABLE `generos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `peliculasseries`
--
ALTER TABLE `peliculasseries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `personajes`
--
ALTER TABLE `personajes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `personajespeliculasseries`
--
ALTER TABLE `personajespeliculasseries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `peliculasseries`
--
ALTER TABLE `peliculasseries`
  ADD CONSTRAINT `peliculasseries_ibfk_1` FOREIGN KEY (`genero_id`) REFERENCES `generos` (`id`);

--
-- Filtros para la tabla `personajespeliculasseries`
--
ALTER TABLE `personajespeliculasseries`
  ADD CONSTRAINT `personajespeliculasseries_ibfk_1` FOREIGN KEY (`personaje_id`) REFERENCES `personajes` (`id`),
  ADD CONSTRAINT `personajespeliculasseries_ibfk_2` FOREIGN KEY (`peliculasSeries_id`) REFERENCES `peliculasseries` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
