
ALTER TABLE moduledtl
	DROP FOREIGN KEY moduledtl_ibfk_1
GO
DROP INDEX user_id ON moduledtl
GO
DROP TABLE user
GO
DROP TABLE moduledtl
GO

CREATE TABLE moduledtl ( 
	module_id   	int(11) AUTO_INCREMENT NOT NULL,
	user_id     	int(11) NULL,
	module_name 	varchar(50) NULL,
	module_order	varchar(50) NULL,
	created_by  	varchar(50) NULL,
	updated_by  	varchar(50) NULL,
	PRIMARY KEY(module_id)
)
GO
CREATE TABLE user ( 
	user_id   	int(11) AUTO_INCREMENT NOT NULL,
	user_name 	varchar(50) NULL,
	created_by	varchar(50) NULL,
	updated_by	varchar(50) NULL,
	PRIMARY KEY(user_id)
)
GO

CREATE INDEX user_id
	ON moduledtl(user_id)
GO
ALTER TABLE moduledtl
	ADD CONSTRAINT moduledtl_ibfk_1
	FOREIGN KEY(user_id)
	REFERENCES user(user_id)
	ON DELETE RESTRICT 
	ON UPDATE RESTRICT 
GO
