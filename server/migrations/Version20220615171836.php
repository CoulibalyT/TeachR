<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220615171836 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE teachrs DROP FOREIGN KEY FK_C27212D5275ED078');
        $this->addSql('DROP INDEX UNIQ_C27212D5275ED078 ON teachrs');
        $this->addSql('ALTER TABLE teachrs DROP profil_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE teachrs ADD profil_id INT NOT NULL');
        $this->addSql('ALTER TABLE teachrs ADD CONSTRAINT FK_C27212D5275ED078 FOREIGN KEY (profil_id) REFERENCES profil (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_C27212D5275ED078 ON teachrs (profil_id)');
    }
}
