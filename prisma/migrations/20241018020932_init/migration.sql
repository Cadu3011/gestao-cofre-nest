-- CreateTable
CREATE TABLE `Cofre` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `filial` VARCHAR(191) NOT NULL,
    `saldo` DECIMAL(65, 30) NOT NULL,
    `sangria` DECIMAL(65, 30) NOT NULL,
    `outras_entradas` DECIMAL(65, 30) NOT NULL,
    `despesas` DECIMAL(65, 30) NOT NULL,
    `deposito` DECIMAL(65, 30) NOT NULL,
    `dateSaldo` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
