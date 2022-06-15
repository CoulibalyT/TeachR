<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220615172136 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE profil ADD teachrs_id INT NOT NULL');
        $this->addSql('ALTER TABLE profil ADD CONSTRAINT FK_E6D6B2972BFC52EA FOREIGN KEY (teachrs_id) REFERENCES teachrs (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_E6D6B2972BFC52EA ON profil (teachrs_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE profil DROP FOREIGN KEY FK_E6D6B2972BFC52EA');
        $this->addSql('DROP INDEX UNIQ_E6D6B2972BFC52EA ON profil');
        $this->addSql('ALTER TABLE profil DROP teachrs_id');
    }
}
