<?php

namespace App\Controller;

use App\Entity\Teachrs;
use App\Repository\ProfilRepository;
use App\Repository\TeachrsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;

class ApiController extends AbstractController
{

      /**
     * @Route("/api/users", name="users", methods={"GET"})
     */
    public function getUsers(TeachrsRepository $teachrsRepository, SerializerInterface $serializer)
    {
        // $Teachr = $teachrsRepository->findAll();
        // $postSerialise = $serializer->serialize($Teachr, 'json');
        // $response = new Response();
        // $response->setContent(json_encode($postSerialise));
        
        // var_dump($response);
        return $this->json($teachrsRepository->findAll(), 200);
    }

    /**
     * @Route("/api/users", name="users_create", methods={"POST"})
     */

     public function SendUsers(Request $request, SerializerInterface $serializer, EntityManagerInterface $em ){
         $json = $request->getContent();
        try{
            $data = $serializer->deserialize($json, Teachrs::class,'json');
            $data->setCreatedAt(new \DateTimeImmutable);
            $em->persist($data);
            $em->flush();
            return $this->json($data, 201);

        } catch(NotEncodableValueException $e){
            return $this->json([
                'status' => 400,
                'message' => $e->getMessage()
            ], 400);
        }
     }

}
