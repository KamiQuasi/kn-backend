# kn-backend
Knative backend using Deno as a runtime

## Usage

1. Set up a [Developer Sandbox](https://developers.redhat.com/developer-sandbox)
2. Get `oc` CLI tool and login to your sandbox using [instructions from Red Hat Developers](https://developers.redhat.com/blog/2021/04/21/access-your-developer-sandbox-for-red-hat-openshift-from-the-command-line#)
3. Run `oc apply -f https://raw.githubusercontent.com/KamiQuasi/kn-backend/main/service.yaml`

You are the proud owner of this serverless function!

4. Delete the service with `oc delete all -l sandbox=serverless`