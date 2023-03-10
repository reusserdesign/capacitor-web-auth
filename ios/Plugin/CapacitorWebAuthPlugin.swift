import Foundation
import Capacitor
import AuthenticationServices

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorWebAuthPlugin)
public class CapacitorWebAuthPlugin: CAPPlugin, ASWebAuthenticationPresentationContextProviding {
    private let implementation = CapacitorWebAuth()

    @objc func login(_ call: CAPPluginCall) {
        let url = call.getString("url") ?? ""
        let redirectScheme = call.getString("redirectScheme") ?? ""
        
        print("Url", url)
        print("Redirect",redirectScheme);
        
        guard let requestUrl = URL(string: url) else {
            return
        }
        
        let authVC = ASWebAuthenticationSession(url: requestUrl, callbackURLScheme: redirectScheme, completionHandler: { url, error in
            if url != nil {
                call.resolve([
                    "value": url?.absoluteString ?? ""
                ])
            } else {
                
                if (error?.localizedDescription.contains("error 1") ?? false) {
                    call.reject("Canceled")
                    return;
                }
                call.reject("Invalid callback")
            }
        })
        
        authVC.presentationContextProvider = self
        authVC.prefersEphemeralWebBrowserSession = true
        
        DispatchQueue.main.async {
            authVC.start()
        }
    }
    
    public func presentationAnchor(for session: ASWebAuthenticationSession) -> ASPresentationAnchor {
        var view: ASPresentationAnchor?
        
        if Thread.isMainThread {
          // do stuff
            view = self.bridge?.webView?.window
        } else {
          DispatchQueue.main.sync {
            // do stuff
              view = self.bridge?.webView?.window
          }
        }

        return view ?? ASPresentationAnchor()
    }
}
