<?php

namespace App\Controller;

use App\Entity\Teachers;
use App\Repository\TeachersRepository;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncode;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;

class ApiController extends AbstractController
{

      /**
     * @Route("/api/users", name="users", methods={"GET"})
     */
    public function getUsers(TeachersRepository $teachersRepository, SerializerInterface $serializer)
    {

        $Teachr = $teachersRepository->findAll();

        $postSerialise = $serializer->serialize($Teachr, 'json');

  
        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        
        $response->setContent(json_encode($postSerialise));
        
        // var_dump($response);
        return $response;
    }

          /**
     * @Route("/api/users", name="users_create", methods={"POST"})
     */

     public function SendUsers(Request $request, SerializerInterface $serializer, EntityManagerInterface $em ){
        try{

            $json = $request->getContent();
            $post = $serializer->deserialize($json, Teachers::class,'json');
            $post->setDate(new \DateTime());
            $em->persist($post);
            $em->flush();
            // return $this->json($post, 201, []);

        } catch(NotEncodableValueException $e){
            return $this->json([
                'status' => 400,
                'message' => $e->getMessage()
            ], 400);
        }

     }

}
