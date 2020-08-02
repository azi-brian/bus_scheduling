
CREATE TABLE jadwal(
id_jadwal INT(11) PRIMARY KEY AUTO_INCREMENT,
nama_bus VARCHAR(100) not null,
asal_stasiun VARCHAR(100) not null,
tujuan_stasiun VARCHAR(100) not null,
waktu_berangkat date not null,
waktu_sampai date not null
)ENGINE=INNODB;

CREATE TABLE bus(
id_bus INT(11) PRIMARY KEY AUTO_INCREMENT,
nama_bus VARCHAR(200)
)ENGINE=INNODB;

CREATE TABLE stasiun(
id_stasiun int(11) PRIMARY KEY AUTO_INCREMENT,
asal_stasiun VARCHAR(100),
tujuan_stasiun VARCHAR(100)
)ENGINE=INNODB;

INSERT INTO jadwal(nama_bus, asal_stasiun, tujuan_stasiun, waktu_berangkat, waktu_sampai) VALUES
('Budiman','Lempuyangan','Pondok Gede','2020-08-07','2020-08-07'),
('Sumber Kencono','Pasar Senen','Solo Balapan','2020-07-01','2020-07-02'),
('Rajawali','Tugu Jogja','soekarno-hatta','2020-01-30','2020-01-31'),
('Kartika','tanah abang','glodok','2020-06-22','2020-06-23'),
('Sumber Waras','cibaduyut','cihampelas','2020-07-01','2020-07-02');