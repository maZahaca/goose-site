<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Subscription;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\ConstraintViolationInterface;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        if ($request->isXmlHttpRequest()) {
            $subscription = (new Subscription())
                ->setEmail($request->get('email'));

            $errors = $this->get('validator')->validate($subscription);
            if ($errors->count() === 0) {
                $this->getDoctrine()->getManager()->persist($subscription);
                $this->getDoctrine()->getManager()->flush();
            }

            $response = [];
            /** @var ConstraintViolationInterface $error */
            foreach ($errors as $error) {
                $response['errors'][$error->getPropertyPath()] = $error->getMessage();
            }

            return new JsonResponse($response);
        } else {
            // replace this example code with whatever you need
            return $this->render(
                'default/index.html.twig',
                [
                    'base_dir' => realpath($this->container->getParameter('kernel.root_dir').'/..'),
                ]
            );
        }
    }
}
