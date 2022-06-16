<?php

namespace App\Controller;

use App\Entity\Profil;
use App\Entity\Statistics;
use App\Entity\Teachrs;
use App\Repository\ProfilRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;

class ApiController extends AbstractController
{


    ////////////////////////////////////////////////////////METHODE GET POUR RECUPERER LES DONNÉES DES TEACHERS///////////////////////////////////////////////////////////
    /**
     * @Route("/api/users", name="users", methods={"GET"})
     */
    public function getUsers(ProfilRepository $profilRepository, SerializerInterface $serializer)
    {
        // $Teachr = $teachrsRepository->findAll();
        // $postSerialise = $serializer->serialize($Teachr, 'json');
        // $response = new Response();
        // $response->setContent(json_encode($postSerialise));
        // dd($Teachr);
        // var_dump($response);
        return $this->json($profilRepository->findAll(), 200);
    }



    ////////////////////////////////////////////////////////METHODE POST POUR ENVOYER LES DONNÉES DES TEACHERS///////////////////////////////////////////////////////////
    /**
     * @Route("/api/users", name="users_create", methods={"POST"})
     */

    public function SendUsers(Request $request, SerializerInterface $serializer, EntityManagerInterface $em)
    {
        $json = $request->getContent();
        try {
            $data = $serializer->deserialize($json, Teachrs::class, 'json');
            $data->setCreatedAt(new \DateTimeImmutable);
            // $stat = new Statistics();
            // $stat->setStats(1);
            $em->persist($data);
            $em->flush();

            return $this->json($data, 201);
        } catch (NotEncodableValueException $e) {
            return $this->json([
                'status' => 400,
                'message' => $e->getMessage()
            ], 400);
        }
    }


    /**
     * @Route("/api/users/{id}", name="users_update", methods={"PUT"})
     */
    public function UpdateUsers(int $id, Request $request,SerializerInterface $serializer, EntityManagerInterface $em)
    {

        $json = $request->getContent();
        try {
            $new = $em->getRepository(Profil::class)->find($id);
            $data = $serializer->deserialize($json, Profil::class, 'json');
            $formation = $data->getFormation();
            $description = $data->getDescription();
            $new->setFormation($formation);
            $new->setDescription($description);
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
