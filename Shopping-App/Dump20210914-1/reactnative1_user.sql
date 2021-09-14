-- MySQL dump 10.13  Distrib 8.0.11, for Win64 (x86_64)
--
-- Host: localhost    Database: reactnative1
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `mobile` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `firstname` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `address_status` varchar(45) DEFAULT NULL,
  `address1` varchar(45) DEFAULT NULL,
  `address2` varchar(45) DEFAULT NULL,
  `landmark` varchar(45) DEFAULT NULL,
  `zipcode` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `image` varchar(445) DEFAULT NULL,
  PRIMARY KEY (`userid`),
  UNIQUE KEY `mobile_UNIQUE` (`mobile`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'1','nat','1','11','null',NULL,NULL,NULL,NULL,NULL,NULL),(2,'23','abcd1','a','11','null',NULL,NULL,NULL,NULL,NULL,NULL),(3,'11','11','11','11','null',NULL,NULL,NULL,NULL,NULL,NULL),(4,'115687a','112345','a','11','null',NULL,NULL,NULL,NULL,NULL,'firstimage'),(6,'115687aaa','112345','a','11','null',NULL,NULL,NULL,NULL,NULL,'_profie'),(7,'115687aaaa','112345','a','11','null',NULL,NULL,NULL,NULL,NULL,'__profie'),(8,'115687aaaa1','112345','a','11','null',NULL,NULL,NULL,NULL,NULL,'__profie1'),(9,'115687aaaa11','112345','a','11','null',NULL,NULL,NULL,NULL,NULL,'__profie1a'),(10,'115687aaaa111','112345','a','11','null',NULL,NULL,NULL,NULL,NULL,'undefined abcd '),(11,'115687aaaa1111','112345','a','11','null',NULL,NULL,NULL,NULL,NULL,'undefined abcd '),(12,'1aa','abcdaa','s','11','null',NULL,NULL,NULL,NULL,NULL,'rn_image_picker_lib_temp_66a78ba9-ea01-42a2-8c01-492d8c16b28c.jpg abcd '),(14,'1aa1','abcdaa','s','11','null',NULL,NULL,NULL,NULL,NULL,' xbcd rn_image_picker_lib_temp_66a78ba9-ea01-42a2-8c01-492d8c16b28c.jpg');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-14 16:00:50
