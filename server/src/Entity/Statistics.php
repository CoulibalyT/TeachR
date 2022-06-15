<?php

namespace App\Entity;

use App\Repository\StatisticsRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: StatisticsRepository::class)]
class Statistics
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'integer')]
    private $stats;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStats(): ?int
    {
        return $this->stats;
    }

    public function setStats(int $stats): self
    {
        $this->stats = $stats;

        return $this;
    }
}
