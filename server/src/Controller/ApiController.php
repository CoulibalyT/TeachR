<?php

namespace App\Controller;

use App\Entity\Profil;
use App\Entity\Statistics;
use App\Repository\ProfilRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;

class ApiController extends AbstractController
{
    
    ////////////////////////////////////////////////////////METHODE GET POUR RECUPERER LES DONNÉES DES TEACHRS///////////////////////////////////////////////////////////
    /**
     * @Route("/api/users", name="users", methods={"GET"})
     */
    public function getUsers(ProfilRepository $profilRepository)
    {
        return $this->json($profilRepository->findAll(), 200);
    }

    ////////////////////////////////////////////////////////METHODE POST POUR ENVOYER LES DONNÉES DES TEACHRS///////////////////////////////////////////////////////////
    /**
     * @Route("/api/users", name="users_create", methods={"POST"})
     */

    public function SendUsers(Request $request, SerializerInterface $serializer, EntityManagerInterface $em)
    {
        $json = $request->getContent();
        try {
            $data = $serializer->deserialize($json, Profil::class, 'json');
            $data->getTeachrs()->setCreatedAt(new \DateTimeImmutable);
            $em->persist($data);
            $new = $em->getRepository(Statistics::class)->find(1);
            $increments = $new->getStats() + 1;
            $new->setStats($increments);
            $em->persist($new);
            $em->flush();
            return $this->json($data, 201);
        } catch (NotEncodableValueException $e) {
            return $this->json([
                'status' => 400,
                'message' => $e->getMessage()
            ], 400);
        }
    }

    ////////////////////////////////////////////////////////METHODE PUT POUR MODIFIER LES DONNÉES DES TEACHRS///////////////////////////////////////////////////////////
    /**
     * @Route("/api/users/{id}", name="users_update", methods={"PUT"})
     */
    public function UpdateUsers(int $id, Request $request, SerializerInterface $serializer, EntityManagerInterface $em)
    {

        $json = $request->getContent();
        try {
            $new = $em->getRepository(Profil::class)->find($id);
            $data = $serializer->deserialize($json, Profil::class, 'json');
            $formation = $data->getFormation();
            $description = $data->getDescription();
            $name = $data->getTeachrs()->getName();
            $new->setFormation($formation);
            $new->setDescription($description);
            $new->getTeachrs()->setName($name);
            $em->persist($new);
            $em->flush();
            return $this->json($new, 201);
        } catch (NotEncodableValueException $e) {
            return $this->json([
                'status' => 400,
                'message' => $e->getMessage()
            ], 400);
        }
    }
}