CREATE TABLE `comments` (
	`id` int AUTO_INCREMENT NOT NULL,
	`articleSlug` varchar(255) NOT NULL,
	`authorName` varchar(255) NOT NULL,
	`authorEmail` varchar(320) NOT NULL,
	`content` text NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `comments_id` PRIMARY KEY(`id`)
);
