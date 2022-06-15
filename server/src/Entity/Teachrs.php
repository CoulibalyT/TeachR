<?php

namespace App\Entity;

use App\Repository\TeachrsRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: TeachrsRepository::class)]
class Teachrs
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[Groups("groupe")]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups("groupe")]
    private $name;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Groups("groupe")]
    private $created_at;

    // #[ORM\OneToOne(targetEntity: Profil::class, cascade: ['persist', 'remove'])]
    // #[ORM\JoinColumn(nullable: false)]
    // private $Profil;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeImmutable $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    // public function getProfil(): ?Profil
    // {
    //     return $this->Profil;
    // }

    // public function setProfil(Profil $Profil): self
    // {
    //     $this->Profil = $Profil;

    //     return $this;
    // }
}
