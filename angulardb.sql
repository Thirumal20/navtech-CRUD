-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 13, 2022 at 02:19 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `angulardb`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `onumber` varchar(250) NOT NULL,
  `oduedate` date NOT NULL,
  `cname` varchar(50) NOT NULL,
  `caddress` longtext NOT NULL,
  `phone` int(25) NOT NULL,
  `total` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `onumber`, `oduedate`, `cname`, `caddress`, `phone`, `total`) VALUES
(3, '123456', '2022-03-16', 'Faizulla', 'Kurnool', 1234567890, 20000);

-- --------------------------------------------------------

--
-- Table structure for table `userdetails`
--

CREATE TABLE `userdetails` (
  `id` int(11) NOT NULL,
  `firstname` varchar(25) DEFAULT NULL,
  `lastname` varchar(25) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `address` varchar(250) DEFAULT NULL,
  `city` varchar(25) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  `state` varchar(25) DEFAULT NULL,
  `zip` int(20) DEFAULT NULL,
  `occu` varchar(25) DEFAULT NULL,
  `intrest` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userdetails`
--

INSERT INTO `userdetails` (`id`, `firstname`, `lastname`, `email`, `dob`, `address`, `city`, `url`, `state`, `zip`, `occu`, `intrest`) VALUES
(3, 'Anisha', 'molla', 'faizulla@gmail.com', '2022-03-07', 'dfdss', 'kurnool', 'fhfhfh', 'Andhra Pradesh', 121212, 'student', '[{\"checked\":true,\"name\":\"Angular\"},{\"checked\":true,\"name\":\"React\"},{\"checked\":true,\"name\":\"Node\"},{\"checked\":true,\"name\":\"Mongodb\"}]'),
(4, 'Faizulla', 'molla', 'faizulla@gmail.com', '2022-03-07', 'dfdss', 'kurnool', 'fhfhfh', 'Andhra Pradesh', 121212, 'student', '[{\"checked\":true,\"name\":\"Angular\"},{\"checked\":true,\"name\":\"React\"},{\"checked\":true,\"name\":\"Node\"}]'),
(8, 'Rahul', 'molla', 'faizulla@gmail.com', '2022-03-07', 'kurnool', 'kurnool', 'fhfhfh', 'Andhra Pradesh', 123456, 'student', '[{\"checked\":true,\"name\":\"Angular\"},{\"checked\":true,\"name\":\"Mongodb\"},{\"checked\":true,\"name\":\"React\"},{\"checked\":true,\"name\":\"Vue\"}]'),
(9, 'Rahul', 'pubbineni', 'rahul@gmail.com', '2022-03-10', 'gfhfhg', 'rajahmundry', 'fhfhfh', 'Andhra Pradesh', 123456, 'employee', '[{\"checked\":true,\"name\":\"React\"},{\"checked\":true,\"name\":\"Vue\"},{\"checked\":true,\"name\":\"Mysql\"}]');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `password`, `id`) VALUES
('Faizulla', '123456', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userdetails`
--
ALTER TABLE `userdetails`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `userdetails`
--
ALTER TABLE `userdetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
