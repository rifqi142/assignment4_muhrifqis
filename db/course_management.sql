/*
 Navicat Premium Data Transfer

 Source Server         : mysql_server
 Source Server Type    : MySQL
 Source Server Version : 80039
 Source Host           : localhost:3306
 Source Schema         : course_management

 Target Server Type    : MySQL
 Target Server Version : 80039
 File Encoding         : 65001

 Date: 20/10/2024 20:04:52
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for courses
-- ----------------------------
DROP TABLE IF EXISTS `courses`;
CREATE TABLE `courses`  (
  `cr_id` int NOT NULL AUTO_INCREMENT,
  `cr_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `cr_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `cr_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `cr_trainer` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `cr_price` int NOT NULL,
  `cr_duration` int NOT NULL,
  `cr_category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `cr_is_active` tinyint(1) NOT NULL DEFAULT 1,
  `cr_created_at` datetime NOT NULL,
  `cr_updated_at` datetime NOT NULL,
  PRIMARY KEY (`cr_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of courses
-- ----------------------------
INSERT INTO `courses` VALUES (1, 'Web Development', 'WD', 'Learn how to build a website', 'Muhammad Ali', 500000, 12, 'IT, Programming, Web Development', 1, '2024-10-20 12:16:22', '2024-10-20 12:16:22');
INSERT INTO `courses` VALUES (2, 'Mobile Development', 'MD', 'Learn how to build a mobile application', 'Muhammad Ikhsan', 450000, 8, 'IT, Programming, Mobile Development', 1, '2024-10-20 12:16:22', '2024-10-20 12:16:22');
INSERT INTO `courses` VALUES (3, 'Data Science', 'DS', 'Learn how to analyze data', 'Fadlan Amrullah', 600000, 10, 'IT, Programming, Data Science', 1, '2024-10-20 12:16:22', '2024-10-20 12:16:22');
INSERT INTO `courses` VALUES (4, 'Machine Learning', 'ML', 'Learn how to build a machine learning model', 'Darwin Prakoso', 700000, 15, 'IT, Programming, Machine Learning', 1, '2024-10-20 12:16:22', '2024-10-20 12:16:22');
INSERT INTO `courses` VALUES (5, 'Artificial Intelligence', 'AI', 'Learn how to build an AI model', 'Satria Ramadhan', 800000, 20, 'IT, Programming, Artificial Intelligence', 1, '2024-10-20 12:16:22', '2024-10-20 12:16:22');

-- ----------------------------
-- Table structure for courses_schedules
-- ----------------------------
DROP TABLE IF EXISTS `courses_schedules`;
CREATE TABLE `courses_schedules`  (
  `cs_id` int NOT NULL AUTO_INCREMENT,
  `cs_cr_id` int NOT NULL,
  `cs_sc_id` int NOT NULL,
  `cs_created_at` datetime NOT NULL,
  `cs_updated_at` datetime NOT NULL,
  PRIMARY KEY (`cs_id`) USING BTREE,
  INDEX `cs_cr_id`(`cs_cr_id`) USING BTREE,
  INDEX `cs_sc_id`(`cs_sc_id`) USING BTREE,
  CONSTRAINT `courses_schedules_ibfk_1` FOREIGN KEY (`cs_cr_id`) REFERENCES `courses` (`cr_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `courses_schedules_ibfk_2` FOREIGN KEY (`cs_sc_id`) REFERENCES `schedules` (`sc_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of courses_schedules
-- ----------------------------
INSERT INTO `courses_schedules` VALUES (1, 1, 1, '2024-10-20 12:16:22', '2024-10-20 12:16:22');
INSERT INTO `courses_schedules` VALUES (2, 2, 2, '2024-10-20 12:16:22', '2024-10-20 12:16:22');
INSERT INTO `courses_schedules` VALUES (3, 3, 3, '2024-10-20 12:16:22', '2024-10-20 12:16:22');
INSERT INTO `courses_schedules` VALUES (4, 4, 4, '2024-10-20 12:16:22', '2024-10-20 12:16:22');

-- ----------------------------
-- Table structure for schedules
-- ----------------------------
DROP TABLE IF EXISTS `schedules`;
CREATE TABLE `schedules`  (
  `sc_id` int NOT NULL AUTO_INCREMENT,
  `sc_date` datetime NOT NULL,
  `sc_start_time` time NOT NULL,
  `sc_end_time` time NOT NULL,
  `sc_is_active` tinyint(1) NOT NULL DEFAULT 1,
  `sc_created_at` datetime NOT NULL,
  `sc_updated_at` datetime NOT NULL,
  PRIMARY KEY (`sc_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of schedules
-- ----------------------------
INSERT INTO `schedules` VALUES (1, '2024-10-16 00:00:00', '08:00:00', '10:00:00', 1, '2024-10-20 12:16:22', '2024-10-20 12:16:22');
INSERT INTO `schedules` VALUES (2, '2024-10-16 00:00:00', '10:00:00', '12:00:00', 1, '2024-10-20 12:16:22', '2024-10-20 12:16:22');
INSERT INTO `schedules` VALUES (3, '2024-10-16 00:00:00', '13:00:00', '15:00:00', 1, '2024-10-20 12:16:22', '2024-10-20 12:16:22');
INSERT INTO `schedules` VALUES (4, '2024-10-16 00:00:00', '15:00:00', '17:00:00', 1, '2024-10-20 12:16:22', '2024-10-20 12:16:22');

-- ----------------------------
-- Table structure for sequelizemeta
-- ----------------------------
DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE `sequelizemeta`  (
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sequelizemeta
-- ----------------------------
INSERT INTO `sequelizemeta` VALUES ('20241014045722-create-user.js');
INSERT INTO `sequelizemeta` VALUES ('20241014050917-create-courses.js');
INSERT INTO `sequelizemeta` VALUES ('20241014051405-create-schedules.js');
INSERT INTO `sequelizemeta` VALUES ('20241014051406-create-courses-schedules.js');
INSERT INTO `sequelizemeta` VALUES ('20241014051500-create-users-courses.js');
INSERT INTO `sequelizemeta` VALUES ('20241016154516-create-token.js');

-- ----------------------------
-- Table structure for tokens
-- ----------------------------
DROP TABLE IF EXISTS `tokens`;
CREATE TABLE `tokens`  (
  `tkn_id` int NOT NULL AUTO_INCREMENT,
  `tkn_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `tkn_value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `tkn_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `tkn_us_id` int NOT NULL,
  `tkn_expired_on` datetime NOT NULL,
  `tkn_is_active` tinyint(1) NOT NULL,
  `tkn_created_at` datetime NOT NULL,
  `tkn_updated_at` datetime NOT NULL,
  PRIMARY KEY (`tkn_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tokens
-- ----------------------------
INSERT INTO `tokens` VALUES (1, 'REGISTER_TOKEN', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c19pZCI6MywidXNfZW1haWwiOiJtdWhhbGlAZ21haWwuY29tIiwibmFtZSI6Im11aGFtbWFkIGFsaSIsInVzX2lzX2FjdGl2ZSI6dHJ1ZSwiaWF0IjoxNzI5NDI3MTkzLCJleHAiOjE3Mjk0MzA3OTN9.DWuuZfToGoocBzBy9RL0zT2bnD7ehTJiusyYfhq2u-0', 'Successfully created token for user muhali@gmail.com', 3, '2024-10-20 13:26:33', 1, '2024-10-20 12:26:33', '2024-10-20 12:26:33');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `us_id` int NOT NULL AUTO_INCREMENT,
  `us_username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `us_fullname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `us_email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `us_phone_number` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `us_password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `us_is_active` tinyint(1) NOT NULL DEFAULT 1,
  `us_created_at` datetime NOT NULL,
  `us_updated_at` datetime NOT NULL,
  PRIMARY KEY (`us_id`) USING BTREE,
  UNIQUE INDEX `us_username`(`us_username`) USING BTREE,
  UNIQUE INDEX `us_email`(`us_email`) USING BTREE,
  UNIQUE INDEX `us_phone_number`(`us_phone_number`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'fadlan123', 'Fadlan Amru', 'fadlan123@gmail.com', '08221155448', '$2b$10$Eim2Jx1DUk5W53M/Sx9GGOwaELfE9IIsZw2W8t3PncHEKGE4Y5v5.', 1, '2024-10-20 12:16:22', '2024-10-20 12:16:22');
INSERT INTO `users` VALUES (2, 'rifqi142', 'Muh Rifqi', 'muhrifqi@gmail.com', '08122554478', '$2b$10$8rQoKHTZAY3XfKFrSxOI..cmkIyvY51gOJ.C7FAQubF0lRxnWZLnS', 1, '2024-10-20 12:16:22', '2024-10-20 12:16:22');

-- ----------------------------
-- Table structure for users_courses
-- ----------------------------
DROP TABLE IF EXISTS `users_courses`;
CREATE TABLE `users_courses`  (
  `uc_id` int NOT NULL AUTO_INCREMENT,
  `uc_us_id` int NOT NULL,
  `uc_cr_id` int NOT NULL,
  `uc_created_at` datetime NOT NULL,
  `uc_updated_at` datetime NOT NULL,
  PRIMARY KEY (`uc_id`) USING BTREE,
  INDEX `uc_us_id`(`uc_us_id`) USING BTREE,
  INDEX `uc_cr_id`(`uc_cr_id`) USING BTREE,
  CONSTRAINT `users_courses_ibfk_1` FOREIGN KEY (`uc_us_id`) REFERENCES `users` (`us_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `users_courses_ibfk_2` FOREIGN KEY (`uc_cr_id`) REFERENCES `courses` (`cr_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users_courses
-- ----------------------------
INSERT INTO `users_courses` VALUES (1, 1, 1, '2024-10-20 12:16:22', '2024-10-20 12:16:22');
INSERT INTO `users_courses` VALUES (2, 1, 2, '2024-10-20 12:16:22', '2024-10-20 12:16:22');
INSERT INTO `users_courses` VALUES (3, 2, 3, '2024-10-20 12:16:22', '2024-10-20 12:16:22');
INSERT INTO `users_courses` VALUES (4, 2, 4, '2024-10-20 12:16:22', '2024-10-20 12:16:22');

SET FOREIGN_KEY_CHECKS = 1;
